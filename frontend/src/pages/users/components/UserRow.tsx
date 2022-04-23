import { FunctionComponent } from "react";
import { Text, Box, Tr, Td, Checkbox, Button, Icon } from '@chakra-ui/react';
import { RiPencilFill } from 'react-icons/ri';
import { User } from "../../../@types";

export interface UserRow {
   user: User;
   isWideVersion: boolean;
}

export const UserRow: FunctionComponent<UserRow> = ({ 
   user, isWideVersion
}) => {
   return(
      <Tr>
         <Td px={["4", "4", "6"]}>
            <Checkbox colorScheme="pink"/>
         </Td>
         <Td>
            <Box>
               <Text fontWeight="bold">
                  {user.name}
               </Text>
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