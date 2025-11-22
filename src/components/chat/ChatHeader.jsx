import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default function ChatHeader({ title, members = [] }) {
  const visible = members.slice(0, 3);
  const others = members.length - visible.length;

  return (
    <div className="w-full flex items-center justify-between pb-4 border-b border-gray-200">
      <h2 className="text-lg font-medium text-gray-800">{title}</h2>

      <div className="flex items-center gap-3">
        <div className="flex items-center">
          {visible.map((src, i) => (
            <img
              key={i}
              src={src}
              className={`w-7 h-7 rounded-full border-2 border-white object-cover ${
                i !== 0 ? "-ml-3" : ""
              }`}
            />
          ))}

          {others > 0 && (
            <span className="text-xs text-gray-400">+{others}</span>
          )}
        </div>

        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className="text-gray-400 text-lg cursor-pointer hover:text-gray-600"
        />
      </div>
    </div>
  );
}
