import { Roles } from "../const";

export type User = {
  id: string;
  name: string;
  avatar: string;
  phone: string;
  email: string;
  role: Roles;
  company: {
    name: string;
    logo: string;
  };
  password?: string;
}
