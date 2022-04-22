import { Box, Stack } from "@chakra-ui/react";
import { FunctionComponent } from "react";

import { SidebarSection } from './Section';
import { sections } from './sections';

export const Sidebar: FunctionComponent = () => {
   return(
      <Box as="aside" w="64" mr="8">
         <Stack align="flex-start" spacing="12">
            {
               sections.map((section, index) => (
                  <SidebarSection {...section} key={String(index)}/>
               ))
            }
         </Stack>
      </Box>
   );
};