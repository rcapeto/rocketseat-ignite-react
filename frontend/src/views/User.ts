import { User } from "../@types";

export const UserView = {
   renderOne(user: User): User {
      const dateCorrect = user.createdAt ? user.createdAt : user.created_at;
      
      const date = new Date(dateCorrect);
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