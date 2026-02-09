export interface LoginPayload {
  email: string;
  password: string;
}

export interface User {
  id: string;
  emaiL: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}
