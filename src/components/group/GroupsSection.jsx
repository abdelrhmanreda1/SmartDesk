// src/components/group/GroupsSection.jsx
import GroupItem from "./GroupItem";
import SectionHeader from "./SectionHeader";

export default function GroupsSection({
  groups,
  totalCount,
  showAll,
  onToggleShowAll,
  activeIndex,
  onChangeActive,
}) {
  return (
    <>
      <SectionHeader title="Group" />

      {groups.map((g, i) => (
        <GroupItem
          key={`group-${i}`}
          {...g}
          active={activeIndex === i}
          onClick={() => onChangeActive(i)}
        />
      ))}

      {totalCount > 4 && (
        <button
          onClick={onToggleShowAll}
          className="text-[12px] text-[#6b4bff] px-2 mt-1 uppercase cursor-pointer hover:underline"
        >
          {showAll ? "SHOW LESS" : "SHOW ALL"}
        </button>
      )}
    </>
  );
}
