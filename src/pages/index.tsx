import { ChangeEvent, FormEvent, useState } from 'react';
import { Flex, Button, Stack } from '@chakra-ui/react';

import { Input, InputProps } from '../components/Form/Input';
import { useForm } from '../hooks/useForm';

export default function Home() {
  const [formState, setFormState] = useState({ email: '', password: 'string' });

  const { checkEmptyFields } = useForm();

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();

    const { hasEmptyField, emptyFields } = checkEmptyFields(formState);
    
    if(!hasEmptyField) {
      console.log('pode enviar');
    } else {
      const message = emptyFields.map(field => `Please fill the field ${field.key}`).join('\n');
      alert(message);
    }
  };

  const inputs: InputProps[] = [
    {
      name: 'email',
      type: 'email',
      id: 'email',
      label: 'E-mail',
      value: formState.email,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFormState({...formState, email: value });
      }
    },
    {
      name: 'password',
      type: 'password',
      id: 'password',
      label: 'Senha',
      value: formState.password,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFormState({...formState, password: value });
      }
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
        onSubmit={handleSubmitForm}
      >
        <Stack spacing="4">
          {
            inputs.map(({ label, ...input }, index) => (
              <Input label={label} {...input} key={String(index)}/>
            ))
          }
        </Stack>
        
        <Button 
          type="submit" 
          mt="6"
          colorScheme="pink" 
          size="large" 
          p={3}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
