import { FunctionComponent } from "react";
import { Flex, Text, Input, Icon, HStack, Box, Avatar, Button } from '@chakra-ui/react';
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';

export const Header: FunctionComponent = () => {
   const icons = [
      {
         as: RiNotificationLine,
         onClick: () => {
            console.log('checkNotifications');
         }
      },
      {
         as: RiUserAddLine,
         onClick: () => {
            console.log('addUser');
         }
      }
   ];

   return(
      <Flex
         as="header"
         maxWidth={1480}
         w="100%"
         h="20"
         mx="auto"
         mt="4"
         align="center"
         px="6"
      >
         <Text 
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
         >
            dashgo<Text color="pink.500" as="span" ml="1">.</Text>
         </Text>

         <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            ml="6"
            maxWidth={400}
            alignSelf="center"
            color="gray.200"
            position="relative"
            bg="gray.800"
            borderRadius="full"
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
            />
         </Flex>

         <Flex
            align="center"
            ml="auto"
         >
            <HStack 
               spacing="3" 
               mx="8" 
               pr="8" 
               py="1" 
               color="gray.300" 
               borderRightWidth={1}
               borderColor="gray.700"
            >
               {
                  icons.map((icon, index) => (
                     <Button
                        onClick={icon.onClick}
                        key={String(index)}
                        variant="unstyled"
                     >
                        <Icon as={icon.as} fontSize="20"/>
                     </Button>
                  ))
               }
            </HStack>

            <Flex
               align="center"
            >
               <Box mr="4" textAlign="right">
                  <Text>Raphael Capeto</Text>
                  <Text color="gray.300" fontSize="small">raphaelcapeto@gmail.com</Text>
               </Box>

               <Avatar size="md" name="Raphael Capeto" src="https://github.com/rcapeto.png"/>
            </Flex>
         </Flex>
      </Flex>
   );
};