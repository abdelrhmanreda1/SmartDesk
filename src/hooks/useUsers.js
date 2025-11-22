import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],

    queryFn: async () => {
      const res = await api.get("/users/list");
      return res.data ?? [];
    },

    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    retry: 1,
    refetchOnWindowFocus: false,
  });
}

