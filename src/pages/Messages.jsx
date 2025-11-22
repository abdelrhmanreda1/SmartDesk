import { useMemo, useState } from "react";
import ChatHeader from "../components/chat/ChatHeader";
import ChatMessageList from "../components/chat/ChatMessageList";
import MessageTopBar from "../components/chat/MessageTopBar";
import ChatInput from "../components/chat/ChatInput";
import GroupList from "../components/group/GroupList";
import { useChatByUser, useSendMessage } from "../hooks/useChats";
import LoadingUsers from "../ui/LoadingUsers";
import ErrorState from "../ui/ErrorState";

const CURRENT_USER_ID = 5;

export default function Messages() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);

  const isMobile = window.innerWidth < 768;

  const selectedUserId = selectedUser?.id || null;

  const {
    data: chatData,
    isLoading: isChatLoading,
    isError: isChatError,
    error: chatError,
  } = useChatByUser(selectedUserId);

  const { mutate: sendMessage, isPending: isSending } = useSendMessage();

  const uiMessages = useMemo(() => {
    if (!chatData || !selectedUser) return [];

    const msgs = chatData.map((msg) => {
      const fromMe = msg.fromUser === CURRENT_USER_ID;

      const createdAt =
        msg.createdAt || msg.created_at || msg.timestamp || msg.time;

      const time = createdAt
        ? new Date(createdAt).toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          })
        : "";

      return {
        type: "text",
        sender: fromMe ? "me" : "other",
        name: fromMe ? undefined : selectedUser.name,
        avatar: fromMe ? undefined : selectedUser.avatar,
        text: msg.message,
        time,
      };
    });

    return [{ type: "day", label: "TODAY" }, ...msgs];
  }, [chatData, selectedUser]);

  const filteredMessages = useMemo(() => {
    if (!searchTerm.trim()) return uiMessages;

    return uiMessages.filter(
      (m) =>
        m.type === "day" ||
        m.text?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [uiMessages, searchTerm]);

  const handleSend = (text) => {
    if (!selectedUserId) return;
    sendMessage({
      fromUser: CURRENT_USER_ID,
      toUser: selectedUserId,
      message: text,
    });
  };

  const chatMembers = selectedUser?.avatar ? [selectedUser.avatar] : [];

  const handleSelectUser = (u) => {
    setSelectedUser(u);

    if (isMobile) {
      setIsMobileChatOpen(true);
    }
  };

  const goBackToList = () => {
    setIsMobileChatOpen(false);
  };

  return (
    <div className="flex flex-col">
      <MessageTopBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="flex flex-col md:flex-row flex-1 mt-4 px-2 md:px-6 gap-4 md:gap-6 overflow-hidden">
        {/* LEFT COLUMN — GROUPS */}
        {!isMobile || !isMobileChatOpen ? (
          <div className={`${isMobile ? "w-full" : "shrink-0"}`}>
            <GroupList
              onSelectUser={handleSelectUser}
              selectedUser={selectedUser}
            />
          </div>
        ) : null}

        {/* RIGHT COLUMN — CHAT */}
        {(!isMobile || isMobileChatOpen) && (
          <div
            className={`flex-1 bg-white rounded-3xl shadow-sm p-6 flex flex-col overflow-hidden ${
              isMobile ? "w-full" : ""
            }`}
          >
            {/* MOBILE BACK BUTTON */}
            {isMobile && (
              <button
                onClick={goBackToList}
                className="mb-4 text-sm text-purple-600 cursor-pointer hover:underline"
              >
                ← Back to chats
              </button>
            )}

            <ChatHeader
              title={selectedUser?.name || "Select a conversation"}
              members={chatMembers}
            />

            <div className="flex-1 mt-4 overflow-hidden">
              {!selectedUserId && (
                <div className="h-full flex items-center justify-center text-sm text-gray-400">
                  Select a user from the list to view the conversation
                </div>
              )}

              {selectedUserId && isChatLoading && (
                <div className="h-full flex items-center justify-center">
                  <LoadingUsers />
                </div>
              )}

              {selectedUserId && isChatError && (
                <div className="h-full flex items-center justify-center">
                  <ErrorState
                    message={chatError?.message || "Failed to load messages"}
                  />
                </div>
              )}

              {selectedUserId && !isChatLoading && !isChatError && (
                <ChatMessageList messages={filteredMessages} />
              )}
            </div>

            <ChatInput onSend={handleSend} isSending={isSending} />
          </div>
        )}
      </div>
    </div>
  );
}
