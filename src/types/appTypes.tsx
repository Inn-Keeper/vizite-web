import { User } from "@/api/vizite";

type Client = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  notes: Note[];
  lastRegistration: Date | null;
};

type Note = {
  id: number;
  note: string;
  date: string;
};

type Service = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type ServicesResponse = {      
  items: Service[];
};

type UserResponse = {
  items: User[];
};

export type { 
  Client, 
  Service, 
  ServicesResponse,
  User,
  UserResponse
};