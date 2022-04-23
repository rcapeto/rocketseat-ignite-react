import { useQuery } from 'react-query';

import api from '../services/api';
import { UserView } from '../views/User';
import { User } from '../@types';

interface GetUsersResponse {
   totalCount: number;
   users: User[];
}

export const getUser = async (userId: string): Promise<User> => {
   const { data } = await api.get(`/api/users/${userId}`);
   return data.user;
};

export const getUsers = async (page: number): Promise<GetUsersResponse> => {
   const { data, headers } = await api.get('api/users', {
      params: {
         page,
      }
   });

   const totalCount = Number(headers['x-total-count']);

   return {
      users: UserView.renderMany(data.users),
      totalCount
   }
};

export const useUsers = ({ page }: { page: number }) => {
   return useQuery<GetUsersResponse>(['users', page], () => getUsers(page), { 
      staleTime: 1000 * 5 //5 seconds (não atualizar por 5 segundos)
   });
};