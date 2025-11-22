import ChatTextMessage from "./ChatTextMessage";
import ChatFileMessage from "./ChatFileMessage";
import ChatVoiceMessage from "./ChatVoiceMessage";

export default function ChatMessage({ msg }) {
  switch (msg.type) {
    case "text":
      return <ChatTextMessage msg={msg} />;
    case "voice":
      return <ChatVoiceMessage msg={msg} />;
    case "files":
      return <ChatFileMessage files={msg.files} />;
    default:
      return null;
  }
}
