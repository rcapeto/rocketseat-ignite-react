import { useEffect, useState } from 'react';
import Link from 'next/link';
import { NextPage } from "next";
import { useRouter } from 'next/router';
import { Box, Flex, HStack, SimpleGrid, VStack, Button } from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { PageHeading } from "../../components/Pages/Heading";
import { Input } from "../../components/Form/Input";

import { system_config } from '../../config';
import { getUser } from '../../hooks/useUser';
import { UserView } from '../../views/User';
import { client } from '../../config/react-query';
import { User } from '../../@types';
import { useModal } from '../../context/ModalContext';

interface FormValues {
   name: string;
   email: string;
   createdAt: string;
};

interface QueryUser {
   user: User;
}

const updateUserSchema = yup.object().shape({
   name: yup.string().required('Nome é obrigatório'),
   email: yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
});

const User: NextPage = () => {
   const [state, setState] = useState({ email: '', name: '', createdAt: ''});

   const { handleSubmit, register, formState } = useForm({
      resolver: yupResolver(updateUserSchema),
   });

   const router = useRouter();
   const { dispatchModal } = useModal();

   const handleUpdateUser: SubmitHandler<FormValues> = async values => {
      console.log(values);
      dispatchModal('Dados alterados com sucesso!', 'success');
   };

   const handleGetUser = async (userId: string) => {
      const queryCache = client.getQueryCache();
      const currentUserCache = queryCache.find<QueryUser>(['user', userId]);
      let page_user: User | undefined;

      if(currentUserCache) {
         const { user } = currentUserCache.state.data;
         page_user = user;
      } else {
         const { user } = await getUser(userId);
         page_user = user;
      }

      if(page_user) {
         const { name, email, createdAt } = UserView.renderOne(page_user);
         setState({ name, email, createdAt });
      }
   };

   const inputs = [
      [
         { 
            name: 'name', 
            id: 'name', 
            label: 'Nome Completo',
            value: state.name,
            error: formState.errors.name
         },
         { 
            name: 'email', 
            id: 'email', 
            label: 'E-mail', 
            type: 'email',
            value: state.email,
            error: formState.errors.email
         }
      ],
      [
         { 
            name: 'createdAt', 
            id: 'createdAt', 
            label: 'Cadastro realizado',
            disabled: true, 
            type: 'text',
            value: state.createdAt,
         }
      ]
   ];


   useEffect(() => {
      const user_id = router.query.id;
      user_id && handleGetUser(user_id as string);
   }, [router.asPath]);

   return(
      <Box>
         <Header />

         <Flex w="100%" maxWidth={system_config.responsive.maxWidth} mx="auto" px="6" mt="3">
            <Sidebar />

            <Box 
               flex="1" 
               borderRadius={8} 
               bg="gray.800" 
               p={["6", "8"]} 
               as="form" 
               onSubmit={handleSubmit(handleUpdateUser)}
            >
               <PageHeading title="Usuário"/> 

               <VStack spacing="8">
                  {
                     inputs.map((group, index) => (
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%" key={String(index)}>
                           {
                              group.map((input, inputIndex) => (
                                 <Input 
                                    key={String(inputIndex)} 
                                    {...input}
                                    {...register(input.name)}
                                 />
                              ))
                           }
                        </SimpleGrid>
                     ))
                  }
               </VStack>

               <Flex mt="8" justify="flex-end">
                  <HStack spacing="4">
                     <Link href="/users" passHref>
                        <Button type="button"colorScheme="whiteAlpha" as="a">Cancelar</Button>
                     </Link>
                     <Button 
                        type="submit" 
                        colorScheme="pink"
                        isLoading={formState.isSubmitting}
                     >
                        Salvar
                     </Button>
                  </HStack>
               </Flex>
            </Box>
         </Flex>
      </Box>
   );
};

export default User;