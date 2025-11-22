export default function ChatDayDivider({ label }) {
  return (
    <div className="flex items-center my-6 w-full select-none">
      <div className="flex-1 border-t border-gray-200"></div>
      <span className="px-4 text-[12px] text-gray-400 tracking-wide">
        {label}
      </span>
      <div className="flex-1 border-t border-gray-200"></div>
    </div>
  );
}
