export interface User {
  userName: string;
}

export interface LoginInput extends Pick<User, 'userName'> {
  password: string;
}

export interface LoginResult {
  token: string;
}
