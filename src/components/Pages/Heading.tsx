import { FunctionComponent } from "react";
import { Flex, Button, Icon, Heading, Divider } from '@chakra-ui/react';
import { IconType } from 'react-icons';

export interface PageHeadingProps {
   onClick?: () => void;
   title: string;
   icon?: IconType;
   hasButton?: boolean;
   buttonText?: string;
};

export const PageHeading: FunctionComponent<PageHeadingProps> = ({ 
   title, icon, onClick, hasButton, buttonText
}) => {
   return(
      <>
         <Flex
            mb="8"
            justify="space-between"
            align="center"
         >
            <Heading fontWeight="normal" fontSize="large">
               {title}
            </Heading>

            {
               hasButton && (
                  <Button 
                     as="a" 
                     size="sm" 
                     fontSize="small" 
                     colorScheme="pink"
                     leftIcon={icon ? <Icon as={icon} fontSize="20"/> : null}
                     cursor="pointer"
                     title="Adicionar usuários"
                     onClick={onClick}
                  >
                     {buttonText}
                  </Button>
               )
            }
         </Flex>
         <Divider my="6" borderColor="gray.700"/>
      </>
   );
};