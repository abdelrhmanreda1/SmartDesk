// src/components/group/PersonsSection.jsx
import GroupItem from "./GroupItem";
import SectionHeader from "./SectionHeader";

export default function PersonsSection({
  persons,
  totalCount,
  showAll,
  onToggleShowAll,
  activeIndex,
  baseIndex,
  onChangeActive,
  searchValue,
  onSearchChange,
  onSelectUser,
}) {
  return (
    <>
      <SectionHeader title="Person" />

      <input
        type="text"
        className="text-sm px-3 py-2 rounded-lg bg-white border border-gray-200 outline-none"
        placeholder="Search users..."
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {persons.map((p, i) => {
        const index = baseIndex + i;
        return (
          <GroupItem
            key={`person-${p.id}`}
            {...p}
            active={activeIndex === index}
            onClick={() => {
              onChangeActive(index);
              onSelectUser?.(p);
            }}
          />
        );
      })}

      {totalCount > 4 && (
        <button
          onClick={onToggleShowAll}
          className="text-[12px] text-[#6b4bff] px-2 mt-1 mb-2 uppercase cursor-pointer hover:underline"
        >
          {showAll ? "SHOW LESS" : "SHOW ALL"}
        </button>
      )}
    </>
  );
}
