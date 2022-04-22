import { FunctionComponent } from "react";
import Link from 'next/link';
import { Flex, Button, Icon, Heading, Divider } from '@chakra-ui/react';
import { IconType } from 'react-icons';

export interface PageHeadingProps {
   title: string;
   icon?: IconType;
   hasButton?: boolean;
   buttonText?: string;
   linkButton?: string;
};

export const PageHeading: FunctionComponent<PageHeadingProps> = ({ 
   title, icon, hasButton, buttonText, linkButton
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
                  <Link href={linkButton} passHref>
                     <Button 
                        as="a" 
                        size="sm" 
                        fontSize="small" 
                        colorScheme="pink"
                        leftIcon={icon ? <Icon as={icon} fontSize="20"/> : null}
                        cursor="pointer"
                        title="Adicionar usuários"
                     >
                        {buttonText}
                     </Button>
                  </Link>
               )
            }
         </Flex>
         <Divider my="6" borderColor="gray.700"/>
      </>
   );
};