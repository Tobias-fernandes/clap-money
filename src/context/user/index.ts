import { create } from "zustand";
import { IStoreUser } from "./types";
import { getUserName } from "@/server/user/name/get-name/actions";
import { getUserAvatar } from "@/server/user/avatar/get-avatar/actions";
import { getUserEmail } from "@/server/user/email/get-email/actions";

const useStoreUser = create<IStoreUser>((set) => ({
  state: {
    name: "",
    avatarUrl: "",
    email: "",
    isLoading: true,
  },

  actions: {
    setName: (name: string) => {
      set((state) => ({
        state: {
          ...state.state,
          name: name,
        },
      }));
    },

    setAvatarUrl: (url: string) => {
      set((state) => ({
        state: {
          ...state.state,
          avatarUrl: url,
        },
      }));
    },

    fetchUserData: async () => {
      const [name, avatarUrl, email] = await Promise.all([
        getUserName(),
        getUserAvatar(),
        getUserEmail(),
      ]);

      set((state) => ({
        state: {
          ...state.state,
          name: name ?? state.state.name ?? "unknown user",
          avatarUrl: avatarUrl ?? state.state.avatarUrl,
          email: email ?? state.state.email,
          isLoading: false,
        },
      }));
    },
  },
}));

export { useStoreUser };
