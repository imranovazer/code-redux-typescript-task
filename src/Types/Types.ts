export interface User {
  id: number;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  company: {
    name: string;
  };
}

 export interface AppState {
  loading: boolean;
  error: string | null;
  users: User[];
}