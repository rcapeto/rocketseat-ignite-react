import { FunctionComponent } from "react";
import { Box, Stack, Text, Icon, Link } from '@chakra-ui/react';
import { IconType } from "react-icons/lib";

export interface ISectionSidebar {
   title: string;
   items: Item[];
}

interface Item {
   icon: IconType;
   text: string;
   link: string;
};

export const SidebarSection: FunctionComponent<ISectionSidebar> = ({ 
   items, title 
}) => {
   return(
      <Box>
         <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
         <Stack spacing="4" mt="8" align="stretch">
            {
               items.map((item, itemIndex) => (
                  <Link 
                     display="flex" 
                     alignItems="center" 
                     key={String(itemIndex)}
                     title={item.text}
                  >
                     <Icon as={item.icon} fontSize="20"/>
                     <Text ml="4" fontWeight="medium">{item.text}</Text>
                  </Link>
               ))
            }
            
         </Stack>
      </Box>
   );
};