export interface User {
  password: string;
  userName: string;
}

export interface LoginInput extends User {}

export interface LoginResult {
  token: string;
}
