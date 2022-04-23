import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { FunctionComponent } from "react";

import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import { Profile } from "../Header/Profile";
import { SidebarNav } from './SidebarNav';

export const Sidebar: FunctionComponent = () => {
   const isDrawerSidebar = useBreakpointValue({
      base: true,
      lg: false,
   });

   const { isOpen, onClose } = useSidebarDrawer();

   if(isDrawerSidebar) {
      return(
         <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay>
               <DrawerContent bg="gray.800" p="4">
                  <DrawerCloseButton mt="3"/>

                  <Profile />

                  <DrawerHeader>Navegação</DrawerHeader>

                  <DrawerBody>
                     <SidebarNav />
                  </DrawerBody>
               </DrawerContent>
            </DrawerOverlay>
         </Drawer>
      );
   }

   return(
      <Box as="aside" w="64" mr="8">
        <SidebarNav />
      </Box>
   );
};