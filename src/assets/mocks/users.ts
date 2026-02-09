import { Roles } from "../../const";
import { User } from "../../types/user";
import user0 from '../img/users/user-0.png';

export const users: User[] = [
  {
    id: '0',
    name: 'John Thomas',
    avatar: user0,
    phone: '+1(724) 123-5423',
    email: 'john.thomas@fishmarket.com',
    role: Roles.Admin,
    company: 'Fish market',
    password: 'admin',
  },
]
