import { FunctionComponent } from "react";
import { Flex, Input, Icon } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export const SearchBox: FunctionComponent = () => {
   return (
      <Flex
         as="label"
         flex="1"
         py="4"
         px="8"
         ml="6"
         maxWidth={['unset', 'unset', 400]}
         w="100%"
         alignSelf="center"
         color="gray.200"
         position="relative"
         bg="gray.800"
         borderRadius="full"
         mt={[3, 3, 0]}
      >
         <Input 
            color="gray.50"
            variant="unstyled"
            placeholder="Buscar na plataforma"
            _placeholder={{ color: 'gray.400'}}
            px="4"
            mr="4"
         />

         <Icon 
            as={RiSearchLine}
            fontSize="20"
            cursor="pointer"
         />
      </Flex>
   );
};