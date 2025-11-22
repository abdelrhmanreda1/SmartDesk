import { useState } from "react";
import ChatHeader from "../components/chat/ChatHeader";
import ChatInput from "../components/chat/ChatInput";
import { useAiChat } from "../hooks/useAiChat";
import ChatWithAi from "../components/chat/ChatWithAi";

export default function AiChat() {
  const [messages, setMessages] = useState([{ type: "day", label: "TODAY" }]);

  const { mutate: sendAi, isPending } = useAiChat();

  const handleSend = (text) => {
    const myMsg = {
      type: "text",
      sender: "me",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, myMsg]);

    sendAi(text, {
      onSuccess: (reply) => {
        const aiMsg = {
          type: "text",
          sender: "other",
          name: "AI Assistant",
          avatar: "/ai.png",
          text: reply,
          time: new Date().toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          }),
        };

        setMessages((prev) => [...prev, aiMsg]);
      },

      onError: () => {
        const errorMsg = {
          type: "text",
          sender: "other",
          name: "AI Assistant",
          avatar: "/ai.png",
          text: "Error connecting to AI server.",
          time: new Date().toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          }),
        };

        setMessages((prev) => [...prev, errorMsg]);
      },
    });
  };

  return (
    <div className="flex flex-col p-6">
      <ChatHeader title="AI Chat Assistant" members={["/ai.png"]} />

      <div className="flex-1 mt-4 overflow-hidden">
        <ChatWithAi messages={messages} />
      </div>

      <ChatInput onSend={handleSend} isSending={isPending} />
    </div>
  );
}
