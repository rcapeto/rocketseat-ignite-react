import { FunctionComponent } from "react";
import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export const Profile: FunctionComponent = ({}) => {
   return(
      <Flex
         align="center"
      >
         <Box mr="4" textAlign="right">
            <Text>Raphael Capeto</Text>
            <Text color="gray.300" fontSize="small">raphaelcapeto@gmail.com</Text>
         </Box>

         <Avatar size="md" name="Raphael Capeto" src="https://github.com/rcapeto.png"/>
   </Flex>
   );
};