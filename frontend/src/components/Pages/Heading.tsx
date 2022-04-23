import { FunctionComponent } from "react";
import Link from 'next/link';
import { Flex, Button, Icon, Heading, Divider, Spinner } from '@chakra-ui/react';
import { IconType } from 'react-icons';

export interface PageHeadingProps {
   title: string;
   icon?: IconType;
   hasButton?: boolean;
   buttonText?: string;
   linkButton?: string;
   isFetching?: boolean;
   isLoading?: boolean;
};

export const PageHeading: FunctionComponent<PageHeadingProps> = ({ 
   title, icon, hasButton, buttonText, linkButton, isFetching, isLoading
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
               { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4"/>}
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