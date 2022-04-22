import { FunctionComponent } from "react";
import { HStack, Button, Icon } from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

export const Notifications: FunctionComponent = () => {
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
   return (
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
   );
};