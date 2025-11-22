import ChatDayDivider from "./ChatDayDivider";
import ChatMessage from "./ChatMessage";

export default function ChatMessageList({ messages }) {
  return (
    <div
      className="
        flex flex-col gap-6 py-4 
       md:h-[390px]  h-[330px]
        overflow-y-scroll no-scrollbar 
        
        w-full 
        md:w-auto
      "
    >
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
