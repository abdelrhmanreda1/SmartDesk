import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export function useGroups() {
  return useQuery({
    queryKey: ["groups"],

    queryFn: async () => {
      const res = await api.get("/groups/list");

      const data = res.data?.data ?? res.data;
      return Array.isArray(data) ? data : [];
    },

    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
}
