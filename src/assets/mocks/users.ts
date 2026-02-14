import fishMarket from '../img/companies/Fish-Market.png'
import uws from '../img/companies/The-Consulate-UWS.png'
import foods from '../img/companies/Shamrock-Foods.png'
import meats from '../img/companies/Quality-Meats.png'
import seaHorse from '../img/companies/SeaHorse.png'
import soho from '../img/companies/Soho.png'
import jam from '../img/companies/Jam.png'

import user0 from '../img/users/user-0.png';
import user1 from '../img/users/user-1.png';
import user2 from '../img/users/user-2.png';
import user3 from '../img/users/user-3.png';
import user4 from '../img/users/user-4.png';
import user5 from '../img/users/user-5.png';
import user6 from '../img/users/user-6.png';
import user7 from '../img/users/user-7.png';
import user8 from '../img/users/user-8.png';
import user9 from '../img/users/user-9.png';
import user10 from '../img/users/user-10.png';

import { User } from "../../types/user";
import { Roles } from "../../const";

export const users: User[] = [
  {
    id: 'user-0',
    name: 'John Thomas',
    avatar: user0,
    phone: '+1(724) 123-5423',
    email: 'john.thomas@fishmarket.com',
    role: Roles.Admin,
    company: {
      name: 'Fish market',
      logo: fishMarket,
    },
    password: 'admin',
    adress: "6457 Sudbury Way"
  },
  {
    id: 'user-1',
    name: 'Alicia Jones',
    avatar: user1,
    phone: "",
    email: "",
    role: Roles.Customer,
    company: {
      name: "Jams",
      logo: jam,
    },
    adress: "6457 Sudbury Way"
  },
  {
    id: 'user-2',
    name: 'Milton Moore',
    avatar: user2,
    phone: "",
    email: "",
    role: Roles.SalesRep,
    company: {
      name: "SeaHorse",
      logo: seaHorse,
    },
    adress: "6457 Sudbury Way"
  },
  {
    id: 'user-3',
    name: 'Peter Kelly',
    avatar: user3,
    phone: "",
    email: "",
    role: Roles.Customer,
    company: {
      name: "Momoya Soho",
      logo: soho,
    },
    adress: "6457 Sudbury Way"
  },
  {
    id: 'user-4',
    name: 'Patricia Anderson-Thompson',
    avatar: user4,
    phone: "",
    email: "",
    role: Roles.SalesRep,
    company: {
      name: "The Consulate UWS",
      logo: uws,
    },
    adress: "6457 Sudbury Way"
  },
  {
    id: 'user-5',
    name: 'Michael Foster',
    avatar: user5,
    phone: "",
    email: "",
    role: Roles.Admin,
    company: {
      name: "Quality Meats",
      logo: meats,
    },
    adress: "6457 Sudbury Way"
  },
  {
    id: 'user-6',
    name: 'Sylvia Thomas',
    avatar: user6,
    phone: "",
    email: "",
    role: Roles.SalesRep,
    company: {
      name: "The Consulate UWS",
      logo: uws,
    },
    adress: "6457 Sudbury Way"
  },
  {
    id: 'user-7',
    name: 'Anthony Wilson',
    avatar: user7,
    phone: "",
    email: "",
    role: Roles.Customer,
    company: {
      name: "Jams",
      logo: jam,
    },
    adress: "6457 Sudbury Way"
  },
  {
    id: 'user-8',
    name: 'Jason Carroll',
    avatar: user8,
    phone: "",
    email: "",
    role: Roles.Customer,
    company: {
      name: "Momoya Soho",
      logo: soho,
    },
    adress: "6457 Sudbury Way"
  },
  {
    id: 'user-9',
    name: 'Christopher Anderson',
    avatar: user9,
    phone: "",
    email: "",
    role: Roles.SalesRep,
    company: {
      name: "Shamrock Foods",
      logo: foods,
    },
    adress: "6457 Sudbury Way"
  },
  {
    id: 'user-10',
    name: 'Tony Walker',
    avatar: user10,
    phone: "",
    email: "",
    role: Roles.SalesRep,
    company: {
      name: "Quality Meats",
      logo: meats,
    },
    adress: "6457 Sudbury Way"
  },
]



