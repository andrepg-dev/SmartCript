export interface DBUser {
  id: string;
  fullName: string;
  email: string;
  avatar: string;
  password: string;
  created_at?: string;
  suscriptionId: string;
}