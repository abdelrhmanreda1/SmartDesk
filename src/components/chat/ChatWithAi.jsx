import ChatDayDivider from "./ChatDayDivider";
import ChatMessage from "./ChatMessage";

export default function ChatWithAi({ messages }) {
  return (
    <div className="flex flex-col gap-6 py-4 h-[460px] md:h-[500px] overflow-y-scroll no-scrollbar">
      {messages.map((msg, i) =>
        msg.type === "day" ? (
          <ChatDayDivider key={i} label={msg.label} />
        ) : (
          <ChatMessage key={i} msg={msg} />
        )
      )}
    </div>
  );
}
