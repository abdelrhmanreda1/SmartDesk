import { useMutation } from "@tanstack/react-query";
import { sendAiMessage } from "../services/ai";

export function useAiChat() {
  return useMutation({
    mutationFn: async (prompt) => {
      return await sendAiMessage(prompt);
    },
  });
}
