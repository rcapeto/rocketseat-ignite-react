import { User } from "../@types";

export const UserView = {
   renderOne(user: User): User {
      const date = new Date(user.createdAt);
      const createdAt = date.toLocaleDateString('pt-br', { 
         month: 'long',
         year: 'numeric',
         day: '2-digit'
      });

      return { ...user, createdAt }
   },
   renderMany(users: User[]): User[] {
      return users.map(user => UserView.renderOne(user));
   }
};