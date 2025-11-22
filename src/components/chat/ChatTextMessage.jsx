export default function ChatTextMessage({ msg }) {
  const mine = msg.sender === "me";

  return (
    <div className={`flex gap-3 mb-6 ${mine ? "justify-end" : ""}`}>
      {!mine && msg.avatar && (
        <img src={msg.avatar} className="w-8 h-8 rounded-full mt-1" />
      )}

      <div className="max-w-[85%] md:max-w-[60%]">
        {!mine && msg.name && (
          <p className="text-xs text-gray-500 mb-1">{msg.name}</p>
        )}

        <div
          className={`px-4 py-2 rounded-2xl text-sm shadow-sm ${
            mine
              ? "bg-[#f0eaff] text-gray-700 rounded-br-none"
              : "bg-[#ff7a95] text-white rounded-bl-none"
          }`}
        >
          {msg.text}
        </div>

        <p className="text-[10px] text-gray-400 mt-1">{msg.time}</p>
      </div>
    </div>
  );
}
