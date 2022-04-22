import { FunctionComponent } from "react";
import { Text } from '@chakra-ui/react';

export const Logo: FunctionComponent = () => {
   return(
      <Text 
         fontSize={["2xl", "3xl"]}
         fontWeight="bold"
         letterSpacing="tight"
         w="64"
      >
         dashgo<Text color="pink.500" as="span" ml="1">.</Text>
   </Text>
   );
};