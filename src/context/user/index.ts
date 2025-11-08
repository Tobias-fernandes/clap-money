import { create } from "zustand";
import { IStoreUser } from "./types";

const useStoreUser = create<IStoreUser>((set) => ({
  state: {
    name: "",
    avatarUrl: "",
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
  },
}));

export { useStoreUser };
