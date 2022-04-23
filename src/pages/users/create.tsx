import { NextPage } from "next";
import { Box, Flex, HStack, SimpleGrid, VStack, Button } from "@chakra-ui/react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { PageHeading } from "../../components/Pages/Heading";
import { Input } from "../../components/Form/Input";
import { system_config } from '../../config';
import Link from 'next/link';

interface FormValues {
   name: string;
   email: string;
   password: string;
   password_confirmation: string;
};

const createUserSchema = yup.object().shape({
   name: yup.string().required('Nome é obrigatório'),
   email: yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
   password: yup.string().required('Senha é obrigatório').min(6, 'No mínimo 6 caractéres'),
   password_confirmation: yup.string().oneOf([
      null, yup.ref('password')
   ], 'As senhas precisam ser iguais!')
});

const CreateUser: NextPage = () => {
   const { formState, handleSubmit, register } = useForm({ 
      resolver: yupResolver(createUserSchema)
   });

   const handleCreateUser = async (values: FormValues) => {
      console.log(values);
   };

   const inputs = [
      [
         { 
            name: 'name', 
            id: 'name', 
            label: 'Nome Completo',
            error: formState.errors.name,
         },
         { 
            name: 'email', 
            id: 'email', 
            label: 'E-mail', 
            type: 'email',
            error: formState.errors.email,
         }
      ],
      [
         { 
            name: 'password', 
            id: 'password', 
            label: 'Senha', 
            type: 'password',
            error: formState.errors.password,
         },
         { 
            name: 'password_confirmation', 
            id: 'password_confirmation', 
            label: 'Confirmar Senha', 
            type: 'password',
            error: formState.errors.password_confirmation,
         }
      ]
   ];

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
               onSubmit={handleSubmit(handleCreateUser)}
            >
               <PageHeading title="Criar usuário"/> 

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

export default CreateUser;