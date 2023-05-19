export interface User {
  email: string;
  password: string;
}

export interface SignupPayload {
  token: string;
  user: any;
}
