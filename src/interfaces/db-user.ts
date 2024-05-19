export enum UserSuscription {
  FREE = 1,
  BASIC = 2,
  PREMIUM = 3
}

export interface DBUser {
  id: string;
  fullName: string;
  email: string;
  avatar: string;
  avatarColor?: string;
  password: string;
  created_at?: string;
  payment_date: string | null;
  suscriptionId?: UserSuscription;
}
