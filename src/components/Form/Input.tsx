
import { 
   FormControl, 
   FormLabel, Input as ChakraInput, 
   InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { FunctionComponent } from "react";

export interface InputProps extends ChakraInputProps {
   label?: string;
};

export const Input: FunctionComponent<InputProps> = ({ 
   label,
   ...rest
}) => {
   return(
      <FormControl>
         { label && <FormLabel htmlFor={rest.id}>{label}</FormLabel> }
         
         <ChakraInput 
            {...rest}
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{ bgColor: 'gray.900' }}
            size="lg"
         />
      </FormControl>
   );
};