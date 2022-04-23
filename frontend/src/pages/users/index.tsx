import { NextPage } from "next";
import { 
   Box, 
   Checkbox, 
   Flex, 
   Spinner, 
   Table, 
   Tbody, 
   Th, 
   Thead, 
   Tr,
   Text, 
   useBreakpointValue 
} from "@chakra-ui/react";
import { useQuery } from 'react-query';

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import { PageHeading } from "../../components/Pages/Heading";
import { UserRow } from './components/UserRow';

import { system_config } from "../../config";
import { User } from "../../@types";
import { UserView } from "../../views/User";

const UserList: NextPage = () => {
   const { data, isLoading, error } = useQuery<User[]>('users', async () => {
      const response = await fetch('http://localhost:3000/api/users');

      if(response.ok) {
         const data = await response.json();
         return UserView.renderMany(data.users);
      }

      return [];
   },{ 
      staleTime: 1000 * 5 //5 seconds
   });

   const isWideVersion = useBreakpointValue({
      base: false,
      lg: true,
   });

   return(
      <Box>
         <Header />

         <Flex w="100%" maxWidth={system_config.responsive.maxWidth} mx="auto" px="6" mt="3">
            <Sidebar />

            <Box flex="1" borderRadius={8} bg="gray.800" p={["4", "6", "8"]}>
               <PageHeading 
                  title="Usuários" 
                  icon={RiAddLine}
                  buttonText="Adicionar usuários"
                  hasButton
                  linkButton="/users/create"
               />

               {
                  isLoading ? (
                     <Flex justify="center">
                        <Spinner />
                     </Flex>
                  ) : error ? (
                     <Flex justify="center">
                        <Text>Falha ao obter dados dos usuários.</Text>
                     </Flex>
                  ) : (
                     <>
                        <Table colorScheme="whiteAlpha">
                        <Thead>
                           <Tr>
                              <Th px={["4", "4", "6"]} color="gray.300" w="8">
                                 <Checkbox colorScheme="pink"/>
                              </Th>
                              <Th>Usuário</Th>
                              {
                                 isWideVersion && (
                                    <Th>Data de Cadastro</Th>
                                 )
                              }
                              <Th w="8"></Th>
                           </Tr>
                        </Thead>
      
                        <Tbody>
                           {
                              data.map((user, index) => (
                                 <UserRow 
                                    key={String(index)}
                                    user={user}
                                    isWideVersion={isWideVersion}
                                 />
                              ))
                           }
                        </Tbody>
                     </Table>
                     <Pagination />
                     </>
                  )
               }

            </Box>
         </Flex>
      </Box>
   );
};

export default UserList;