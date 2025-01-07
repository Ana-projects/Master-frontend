export interface Profile {
  username: string;
}

export interface ProfileContextModel {
  username: string;
  setProfile: (username: string) => void;
}
