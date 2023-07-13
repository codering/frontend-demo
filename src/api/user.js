import { useQuery } from "react-query";
import { api } from "./apiClient";

export const userKeyFactory = {
  users: ["all-users"],
  userById: (id) => [...userKeyFactory.users, id],
};

const fetchUserById = async (params) => {
  return await api.get(`/users/${params.userId}`).data;
};

export const useGetUserById = (userId, options) => {
  return useQuery({
    queryFn: () => fetchUserById(userId),
    queryKey: [...userKeyFactory.userById(userId)],
    ...options,
  });
};
