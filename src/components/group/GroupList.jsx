import { useState, useMemo } from "react";
import { useUsers } from "../../hooks/useUsers";
import { useGroups } from "../../hooks/useGroups";
import LoadingUsers from "../../ui/LoadingUsers";
import ErrorState from "../../ui/ErrorState";
import GroupsSection from "./GroupsSection";
import PersonsSection from "./PersonsSection";

export default function GroupList({ onSelectUser }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAllGroups, setShowAllGroups] = useState(false);
  const [showAllPersons, setShowAllPersons] = useState(false);
  const [searchUser, setSearchUser] = useState("");

  const {
    data: users,
    isLoading: isUsersLoading,
    isError: isUsersError,
    error: usersError,
  } = useUsers();
  const {
    data: groups,
    isLoading: isGroupsLoading,
    isError: isGroupsError,
    error: groupsError,
  } = useGroups();

  const isLoading = isUsersLoading || isGroupsLoading;
  const isError = isUsersError || isGroupsError;
  const error = usersError || groupsError;

  const groupData = useMemo(() => {
    if (!groups) return [];
    return groups.map((g) => ({
      initials: g.name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
      name: g.name,
      lastMessage: g.users?.length
        ? `${g.users.length} members`
        : "No members yet",
    }));
  }, [groups]);

  const displayedGroups = showAllGroups ? groupData : groupData.slice(0, 4);

  // PERSONS
  const personData = useMemo(() => {
    if (!users) return [];
    const q = searchUser.toLowerCase();

    return users
      .map((u) => ({
        id: u.id,
        avatar: u.profileImage,
        name: u.username,
        lastMessage: u.position,
      }))
      .filter((p) => p.name.toLowerCase().includes(q));
  }, [users, searchUser]);

  const displayedPersons = showAllPersons ? personData : personData.slice(0, 4);

  if (isLoading) {
    return (
      <div className="w-[270px] h-[590px] bg-[#f8f7fc] rounded-3xl p-4 shadow flex items-center justify-center">
        <LoadingUsers />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-[270px] h-[590px] bg-[#f8f7fc] rounded-3xl p-4 shadow flex items-center justify-center">
        <ErrorState message={error?.message || "Failed to load sidebar data"} />
      </div>
    );
  }

  return (
    <div className="w-[270px] h-[590px] bg-[#f8f7fc] rounded-3xl p-4 flex flex-col gap-3 overflow-y-auto no-scrollbar hover:scroll-beauty shadow">
      <GroupsSection
        groups={displayedGroups}
        totalCount={groupData.length}
        showAll={showAllGroups}
        onToggleShowAll={() => setShowAllGroups((v) => !v)}
        activeIndex={activeIndex}
        onChangeActive={setActiveIndex}
      />

      <PersonsSection
        persons={displayedPersons}
        totalCount={personData.length}
        showAll={showAllPersons}
        onToggleShowAll={() => setShowAllPersons((v) => !v)}
        activeIndex={activeIndex}
        baseIndex={groupData.length}
        onChangeActive={setActiveIndex}
        searchValue={searchUser}
        onSearchChange={setSearchUser}
        onSelectUser={onSelectUser}
      />
    </div>
  );
}
