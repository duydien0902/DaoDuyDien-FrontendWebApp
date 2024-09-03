export interface InfoUser {
  id: string;
  role: string;
  status: boolean;
  email: string;
  fullname: string;
  phone: string;
}

export interface InfoUserData {
  data: InfoUser[];
  total: number;
}
