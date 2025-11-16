interface IStoreUser {
  state: {
    name: string;
    avatarUrl: string;
    email: string;
    isLoading: boolean;
  };
  actions: {
    setName: (name: string) => void;
    setAvatarUrl: (url: string) => void;
    fetchUserData: () => Promise<void>;
  };
}
export type { IStoreUser };
