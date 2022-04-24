import { useState } from 'react';
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

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import { PageHeading } from "../../components/Pages/Heading";
import { UserRow } from './components/UserRow';

import { system_config } from "../../config";
import { useUsers } from "../../hooks/useUser";
import { User } from '../../@types';

const UserList: NextPage = () => {
   const [page, setPage] = useState(1);
   const { data, isLoading, error, isFetching} = useUsers(page);

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
                  isFetching={isFetching}
                  isLoading={isLoading}
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
                              data.users.map((user, index) => (
                                 <UserRow 
                                    key={String(index)}
                                    user={user}
                                    isWideVersion={isWideVersion}
                                 />
                              ))
                           }
                        </Tbody>
                     </Table>
                     <Pagination 
                        totalCountOfRegisters={data.totalCount}
                        currentPage={page}
                        onPageChange={setPage}
                     />
                     </>
                  )
               }

            </Box>
         </Flex>
      </Box>
   );
};

export default UserList;