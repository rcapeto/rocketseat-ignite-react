import { ReactNode } from 'react';

export interface User {
   name: string;
   email: string;
   createdAt: string;
   id: string;
   password?: string;
   created_at?: string;
}

export interface Provider {
   children: ReactNode;
}