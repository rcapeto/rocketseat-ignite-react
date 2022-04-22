import { FunctionComponent } from "react";
import { Button } from '@chakra-ui/react';

export interface PageProps {
   number: number;
   active: boolean;
};

export const ButtonPage: FunctionComponent<PageProps> = ({
   active, number
}) => {
   const isActiveConfig = {
      colorScheme: 'pink',
      disabled: true,
      _disabled: {
         bgColor: 'pink.500',
         cursor: 'default'
      },
   };

   const isNotActiveConfig = {
      bgColor: 'gray.700',
      _hover: {
         bg: 'gray.500'
      }
   };

   const config = active ? isActiveConfig : isNotActiveConfig;

   return (
      <Button size="sm" fontSize="xs" w="4" {...config}>
         { number }
      </Button>
   );
};