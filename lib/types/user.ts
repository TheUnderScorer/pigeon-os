export interface User {
  userName: string;
}

export interface LoginInputInterface extends Pick<User, 'userName'> {
  password: string;
}

export interface LoginResult {
  token: string;
}
