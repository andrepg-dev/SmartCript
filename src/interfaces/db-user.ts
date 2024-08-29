export enum UserSuscription {
  FREE = 1,
  BASIC = 2,
  PREMIUM = 3
}

export interface DBUser {
  user_id: string;
  fullname: string;
  email: string;
  avatar: string;
  avatar_color?: string;
  password: string;
  created_at?: string;
  payment_date: string | null;
  suscriptionId?: UserSuscription;
  suscription_name: string;
  amount: number;
  exp: number;
  iat: number;
}
