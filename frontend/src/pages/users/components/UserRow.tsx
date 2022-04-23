import { FunctionComponent } from "react";
import NextLink from 'next/link';
import { Text, Box, Tr, Td, Checkbox, Button, Icon, Link } from '@chakra-ui/react';
import { RiPencilFill } from 'react-icons/ri';

import { User } from "../../../@types";
import { client } from '../../../config/react-query';
import api from "../../../services/api";

export interface UserRow {
   user: User;
   isWideVersion: boolean;
}

export const UserRow: FunctionComponent<UserRow> = ({ 
   user, isWideVersion
}) => {
   //carregar quando passar o mouse e deixar em cache
   const handlePrefecthUser = async (id: string) => {
      await client.prefetchQuery(['user', id], async () => {
         const { data } = await api.get(`/api/users/${id}`);
         return data;
      });
   };

   return(
      <Tr>
         <Td px={["4", "4", "6"]}>
            <Checkbox colorScheme="pink"/>
         </Td>
         <Td>
            <Box>
               <NextLink passHref href={`/users/${user.id}`}>
                  <Link color="purple.400" onMouseEnter={() => handlePrefecthUser(user.id)}>
                     <Text fontWeight="bold">
                        {user.name}
                     </Text>
                  </Link>
               </NextLink>
               <Text fontSize="sm" color="gray.300">
                  {user.email}
               </Text>
            </Box>
         </Td>
         {
            isWideVersion && (
               <Td>{user.createdAt}</Td>
            )
         }
         <Td>
            {
               isWideVersion && (
                  <Button 
                     as="a" 
                     size="sm"
                     fontSize="small" 
                     colorScheme="purple"
                     leftIcon={<Icon as={RiPencilFill} fontSize="16"/>}
                     cursor="pointer"
                     title="Adicionar usuários"
                  >
                     Editar
                  </Button>
               )
            }
         </Td>
      </Tr>
   );
};