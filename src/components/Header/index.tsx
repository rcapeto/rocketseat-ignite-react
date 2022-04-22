import { FunctionComponent, useEffect, useState } from "react";
import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from "react-icons/ri";

import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";
import { RightContent } from "./RightContent";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";

import { system_config } from '../../config';

export const Header: FunctionComponent = () => {
   const [isMobile, setIsMobile] = useState(false);

   const { onOpen } = useSidebarDrawer();

   const isWideVersion = useBreakpointValue({
      base: false,
      lg: true,
      md: false,
   });

   useEffect(() => {
      const controlResponsive = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener('resize', controlResponsive);

      return () => window.removeEventListener('resize', controlResponsive);
   }, []);

   return(
      <Flex
         as="header"
         maxWidth={system_config.responsive.maxWidth}
         w="100%"
         h="20"
         mx="auto"
         mt="4"
         align="center"
         px="6"
         display="flex"
         flexDir={["column", "column", "row"]}
         mb={[50, 50, 0]}
      >
         <Flex w="100%"> 
            {
               !isWideVersion && (
                  <IconButton
                     icon={<Icon as={RiMenuLine}/>}
                     fontSize="24"
                     variant="unstyled"
                     onClick={onOpen}
                     aria-label="Open navigation"
                     mr="2"
                     mt={[0, 0, 2]}
                  > 

                  </IconButton>
               )
            }

            <Logo />
            { isWideVersion && <SearchBox /> }
            <RightContent showProfileData={isWideVersion} />
         </Flex>

         {
           !isWideVersion && isMobile && <SearchBox />
         }
      </Flex>
   );
};