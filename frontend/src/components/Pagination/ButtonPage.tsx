import { FunctionComponent } from "react";
import { Button } from '@chakra-ui/react';

export interface PageProps {
   number: number;
   isCurrent?: boolean;
   onPageChange: (page: number) => void;
};

export const ButtonPage: FunctionComponent<PageProps> = ({
   isCurrent, number, onPageChange
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

   const config = isCurrent ? isActiveConfig : isNotActiveConfig;

   return (
      <Button size="sm" fontSize="xs" w="4" {...config} onClick={() => onPageChange(number)}>
         { number }
      </Button>
   );
};