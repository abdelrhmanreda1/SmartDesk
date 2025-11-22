import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default function ChatVoiceMessage({ msg }) {
  const mine = msg.sender === "me";

  return (
    <div className={`flex gap-3 mb-6 ${mine ? "justify-end" : ""}`}>
      {!mine && msg.avatar && (
        <img src={msg.avatar} className="w-8 h-8 rounded-full mt-1" />
      )}

      <div className="max-w-[70%]">
        {!mine && msg.name && (
          <p className="text-xs text-gray-500 mb-1">{msg.name}</p>
        )}

        <div className="flex items-center gap-4 px-4 py-3 rounded-2xl shadow-sm bg-linear-to-r from-[#c977ff] to-[#f0a9ff] text-white">
          <div className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-purple-600 shadow">
            <FontAwesomeIcon icon={faPlay} />
          </div>

          <div className="flex-1 h-8 rounded-md bg-white/30" />

          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className="text-white/80 text-sm cursor-pointer"
          />
        </div>

        {msg.caption && (
          <div className="mt-2 inline-block bg-[#f0eaff] text-gray-700 text-sm px-4 py-2 rounded-2xl rounded-bl-none shadow-sm">
            {msg.caption}
          </div>
        )}

        <p className="text-[10px] text-gray-400 mt-1">{msg.time}</p>
      </div>
    </div>
  );
}
