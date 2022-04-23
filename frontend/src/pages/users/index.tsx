import { NextPage } from "next";
import { Box, Button, Checkbox, Flex, Icon, Table, Tbody, Td, Th, Thead, Tr , Text, useBreakpointValue} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine, RiPencilFill } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import { PageHeading } from "../../components/Pages/Heading";

import { system_config } from "../../config";

const users = [
   {
      name: 'Raphael Capeto',
      email: 'raphaelcapeto@gmail.com',
      created_at: '20 de abril, 2021'
   },
   {
      name: 'Diego Fernandes',
      email: 'diego3g@gmail.com',
      created_at: '21 de abril, 2021'
   }
];

const UserList: NextPage = () => {
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
                        users.map((user, index) => (
                           <Tr key={String(index)}>
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
                                    <Td>{user.created_at}</Td>
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
                        ))
                     }
                  </Tbody>
               </Table>
               <Pagination />
            </Box>
         </Flex>
      </Box>
   );
};

export default UserList;