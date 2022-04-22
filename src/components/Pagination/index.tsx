import { FunctionComponent } from "react";
import { Stack, Box } from "@chakra-ui/react";

import { ButtonPage, PageProps } from './ButtonPage';

export const Pagination: FunctionComponent = () => {
   const pages: PageProps[] = [
      {
         number: 1,
         active: true,
      },
      {
         number: 2,
         active: false,
      },
      {
         number: 2,
         active: false,
      },
      {
         number: 4,
         active: false,
      }
   ]

   return(
      <Stack
         direction="row"
         mt="8"
         justify="space-between"
         align="center"
         spacing="6"
      >
         <Box>
            <strong>0</strong> - <strong>10</strong> de 100
         </Box>
         <Stack direction="row" spacing="2">
            {
               pages.map((page, index) => (
                  <ButtonPage {...page} key={String(index)}/>
               ))
            }
         </Stack>
      </Stack>
   );
};