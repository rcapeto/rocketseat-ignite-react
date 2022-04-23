import { FunctionComponent } from 'react';
import { Text } from '@chakra-ui/react';

export const ComponentDot: FunctionComponent = () => {
   return(
      <Text color="gray.300" w="8" textAlign="center">
         ..
      </Text>
   );
}