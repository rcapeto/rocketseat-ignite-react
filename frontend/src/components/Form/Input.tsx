import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form';
import { 
   FormControl, 
   FormLabel, Input as ChakraInput, 
   InputProps as ChakraInputProps,
   FormErrorMessage
} from '@chakra-ui/react';

export interface InputProps extends ChakraInputProps {
   label?: string;
   error?: FieldError;
};

const InputComponent: ForwardRefRenderFunction<HTMLInputElement,InputProps> = ({ 
   label,
   error,
   ...rest
}, ref) => {
   return(
      <FormControl isInvalid={!!error}>
         { label && <FormLabel htmlFor={rest.id}>{label}</FormLabel> }
         
         <ChakraInput 
            {...rest}
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{ bgColor: 'gray.900' }}
            size="lg"
            ref={ref}
         />

         {
            !!error && (
               <FormErrorMessage>{error.message}</FormErrorMessage>
            )
         }
      </FormControl>
   );
};

export const Input = forwardRef(InputComponent);