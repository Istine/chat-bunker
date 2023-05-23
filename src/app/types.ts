export interface User {
  email: string;
  password: string;
}

export interface SignupPayload {
  token: string;
  user: any;
}

export interface LoginPayload {
  token?: string;
  message: string;
}
