import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faSmile,
  faPaperclip,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ChatInput({ onSend, isSending = false }) {
  const [value, setValue] = useState("");
  const canSend = value.trim() && !isSending;

  const handleSend = () => {
    if (!canSend) return;
    onSend(value.trim());
    setValue("");
  };

  return (
    <div
      className="
        pt-4 mt-4 
        flex items-center gap-2 
        md:gap-3
      "
    >
      <div
        className="
          flex items-center gap-3 
          flex-1 
          bg-[#F8F7FC] 
          rounded-lg 
          px-3 py-2 
          md:px-5 md:py-3
          shadow-sm
        "
      >
        <input
          placeholder={isSending ? "Sending..." : "Type your message..."}
          className="
            flex-1 
            text-sm 
            outline-none 
            bg-transparent 
            placeholder-[#C7C7D5]
          "
          value={value}
          disabled={isSending}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        {/* EMOJI */}
        <button className="text-gray-400 text-lg hover:text-gray-500 hidden md:block">
          <FontAwesomeIcon icon={faSmile} />
        </button>

        {/* ATTACH */}
        <button className="text-gray-400 text-lg hover:text-gray-500 hidden md:block">
          <FontAwesomeIcon icon={faPaperclip} />
        </button>

        {/* MIC */}
        <button className="text-gray-400 text-lg hover:text-gray-500 hidden md:block">
          <FontAwesomeIcon icon={faMicrophone} />
        </button>
      </div>

      <button
        onClick={handleSend}
        disabled={!canSend}
        className={`
          w-9 h-9 
          md:w-10 md:h-10
          rounded-full 
          flex items-center justify-center 
          transition 
          ${canSend ? "text-purple-600" : "text-purple-300 cursor-not-allowed"}
        `}
      >
        {isSending ? (
          <div className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
        ) : (
          <FontAwesomeIcon icon={faPaperPlane} className="text-lg md:text-xl" />
        )}
      </button>
    </div>
  );
}
