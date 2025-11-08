interface IStoreUser {
  state: {
    name: string;
    avatarUrl: string;
  };
  actions: {
    setName: (name: string) => void;
    setAvatarUrl: (url: string) => void;
  };
}

export type { IStoreUser };