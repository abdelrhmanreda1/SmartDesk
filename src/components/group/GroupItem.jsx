export default function GroupItem({
  active,
  initials,
  avatar,
  name,
  lastMessage,
  badge,
  onClick,
}) {
  const isTwoLetters = initials?.length === 2;

  function getColorForInitial(initials) {
    const palette = [
      { bg: "#fff", text: "#3D8BFF" },
      { bg: "#fff", text: "#6B4BFF" },
      { bg: "#fff", text: "#FF9B00" },
      { bg: "#fff", text: "#FF4F7D" },
      { bg: "#fff", text: "#33C27D" },
    ];

    if (!initials || initials.length === 0) {
      return palette[0];
    }

    const index = initials.charCodeAt(0) % palette.length;
    return palette[index];
  }

  const { bg, text } = getColorForInitial(initials);

  return (
    <div
      onClick={onClick}
      className={`
        relative flex items-center gap-3 px-4 py-3 cursor-pointer
        transition-all duration-200 rounded-xl
        ${active ? "bg-[#f3f0ff] -ml-3 pl-7" : "hover:bg-[#eeeaff]"}
      `}
    >
      {active && (
        <div className="absolute left-[-5px] top-0 h-full w-1 bg-[#6b4bff] rounded-r-lg"></div>
      )}

      {avatar ? (
        <img
          src={avatar}
          className="w-10 h-10 rounded-full object-cover"
          alt={name}
        />
      ) : (
        <div
          className={`
            w-10 h-10 rounded-full
            flex items-center justify-center
            font-medium
            tracking-tight
            ${isTwoLetters ? "text-[13px]" : "text-[15px]"}
          `}
          style={{
            backgroundColor: bg,
            color: text,
          }}
        >
          {initials || "?"}
        </div>
      )}

      <div className="flex flex-col flex-1 overflow-hidden">
        <p className="text-[14px] font-medium text-gray-800 truncate">{name}</p>
        <p className="text-[12px] text-gray-400 truncate">{lastMessage}</p>
      </div>
      {badge > 0 && (
        <span className="min-w-5 h-5 px-1.5 rounded-full bg-[#ff5c8a] text-white text-[11px] flex items-center justify-center">
          {badge}
        </span>
      )}
    </div>
  );
}
