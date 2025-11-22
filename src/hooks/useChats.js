// src/hooks/useChats.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../services/api";

const CURRENT_USER_ID = 5;

// ✅ كل الشاتات (مش لازم نستخدمها دلوقتي بس هتحتاجها لو عملت Chat list فوق)
export function useChatList() {
  return useQuery({
    queryKey: ["chats"],
    queryFn: async () => {
      const res = await api.get("/chat/list");
      // الـ API راجع { data: [...] } أو [] مباشرة؟
      // هنرجّع res.data.data لو موجودة، وإلا res.data
      return res.data?.data ?? res.data;
    },
    staleTime: 1000 * 60, // دقيقة
  });
}

// ✅ شات مع يوزر معيّن
export function useChatByUser(userId) {
  return useQuery({
    queryKey: ["chatByUser", userId],
    enabled: !!userId, // ما يشتغلش غير لما يبقى فيه userId
    queryFn: async () => {
      const res = await api.get(`/chatByUserId/${userId}`);
      return res.data?.data ?? res.data;
    },
    staleTime: 1000 * 30,
  });
}

// ✅ تفاصيل يوزر واحد (ممكن نستخدمها في الـ Header لو حبيت)
export function useChatUser(userId) {
  return useQuery({
    queryKey: ["chatUser", userId],
    enabled: !!userId,
    queryFn: async () => {
      const res = await api.get(`/user/${userId}`);
      return res.data?.data ?? res.data;
    },
    staleTime: 1000 * 60 * 5,
  });
}

// ✅ إرسال رسالة مع optimistic update
export function useSendMessage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ fromUser, toUser, message }) => {
      const body = { fromUser, toUser, message };
      const res = await api.post("/chat/add", body);
      return res.data?.data ?? res.data;
    },

    // 🟣 optimistic update
    onMutate: async (newMsg) => {
      const { toUser, message } = newMsg;

      await queryClient.cancelQueries({ queryKey: ["chatByUser", toUser] });

      const previous = queryClient.getQueryData(["chatByUser", toUser]);

      const optimisticMessage = {
        id: Date.now(),
        fromUser: CURRENT_USER_ID,
        toUser,
        message,
        createdAt: new Date().toISOString(),
        optimistic: true,
      };

      queryClient.setQueryData(["chatByUser", toUser], (old = []) => [
        ...old,
        optimisticMessage,
      ]);

      return { previous };
    },

    // لو حصل error رجّع القديمة
    onError: (_err, variables, context) => {
      if (context?.previous) {
        queryClient.setQueryData(
          ["chatByUser", variables.toUser],
          context.previous
        );
      }
    },

    // بعد النجاح نعمل refetch عشان نضمن الداتا صح من السيرفر
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["chatByUser", variables.toUser],
      });
    },
  });
}
