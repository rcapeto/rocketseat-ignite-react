import { FunctionComponent } from "react";
import { Stack } from '@chakra-ui/react';

import { sections } from './sections';
import { SidebarSection } from './Section';

export const SidebarNav: FunctionComponent = () => {
   return(
      <Stack align="flex-start" spacing="12">
         {
            sections.map((section, index) => (
               <SidebarSection {...section} key={String(index)}/>
            ))
         }
      </Stack>
   );
};