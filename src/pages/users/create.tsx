import { ChangeEvent, FormEvent, useState } from 'react';
import { NextPage } from "next";
import { Box, Flex, HStack, SimpleGrid, VStack, Button, ButtonProps } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { PageHeading } from "../../components/Pages/Heading";
import { Input } from "../../components/Form/Input";
import { useForm } from '../../hooks/useForm';
import { system_config } from '../../config';
import Link from 'next/link';

interface ArrayButtonItem extends ButtonProps {
   label: string;
}

const CreateUser: NextPage = () => {
   const [formState, setFormState] = useState({
      name: '', email: '', password: '', passwordConfirm: ''
   });

   const { checkEmptyFields } = useForm();

   const inputs = [
      [
         { 
            name: 'name', id: 'name', label: 'Nome Completo',
            value: formState.name, onChange: (e: ChangeEvent<HTMLInputElement>) => {
               setFormState({...formState, name: e.target.value });
            }
         },
         { 
            name: 'email', id: 'email', label: 'E-mail', type: 'email',
            value: formState.email, onChange: (e: ChangeEvent<HTMLInputElement>) => {
               setFormState({...formState, email: e.target.value });
            }
         }
      ],
      [
         { 
            name: 'password', id: 'password', label: 'Senha', type: 'password',
            value: formState.password, onChange: (e: ChangeEvent<HTMLInputElement>) => {
               setFormState({...formState, password: e.target.value });
            }
         },
         { 
            name: 'passwordConfirm', id: 'passwordConfirm', label: 'Confirmar Senha', type: 'password',
            value: formState.passwordConfirm, onChange: (e: ChangeEvent<HTMLInputElement>) => {
               setFormState({...formState, passwordConfirm: e.target.value });
            }
         }
      ]
   ];

   const buttons: ArrayButtonItem[] = [
      { label: 'Cancelar', colorScheme: 'whiteAlpha', type: 'button' },
      { label: 'Salvar', colorScheme: 'pink', type: 'submit' },
   ];

   const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      
      const { hasEmptyField, emptyFields } = checkEmptyFields(formState);
    
      if(!hasEmptyField) {
        console.log('pode enviar');
      } else {
        const message = emptyFields.map(field => `Please fill the field ${field.key}`).join('\n');
        alert(message);
      }
   };

   return(
      <Box>
         <Header />

         <Flex w="100%" maxWidth={system_config.responsive.maxWidth} mx="auto" px="6" mt="3">
            <Sidebar />

            <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]} as="form" onSubmit={handleSubmit}>
               <PageHeading title="Criar usuário"/> 

               <VStack spacing="8">
                  {
                     inputs.map((group, index) => (
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%" key={String(index)}>
                           {
                              group.map((input, inputIndex) => (
                                 <Input key={String(inputIndex)} {...input}/>
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
                     <Button type="submit" colorScheme="pink">Salvar</Button>
                  </HStack>
               </Flex>
            </Box>
         </Flex>
      </Box>
   );
};

export default CreateUser;