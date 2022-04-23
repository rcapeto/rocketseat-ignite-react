import { Flex, Button, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input, InputProps } from '../components/Form/Input';

interface FormValues {
  email: string;
  password: string;
}

const signInSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = async (values: FormValues) => {
    console.log(values);
  };

  const inputs: InputProps[] = [
    {
      name: 'email',
      type: 'email',
      id: 'email',
      label: 'E-mail',
      error: formState.errors.email
    },
    {
      name: 'password',
      type: 'password',
      id: 'password',
      label: 'Senha',
      error: formState.errors.password
    }
  ];

  return (
    <Flex 
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex 
        as="form" 
        w="100%" 
        maxWidth={360} 
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          {
            inputs.map(({ label, ...input }, index) => (
              <Input 
                label={label} 
                {...input} 
                key={String(index)} 
                {...register(input.name)}
              />
            ))
          }
        </Stack>
        
        <Button 
          type="submit" 
          mt="6"
          colorScheme="pink" 
          size="large" 
          p={3}
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
