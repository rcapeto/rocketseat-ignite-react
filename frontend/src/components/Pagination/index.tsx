import { FunctionComponent } from "react";
import { Stack, Box } from "@chakra-ui/react";

import { usePagination } from './logic';
import { ButtonPage } from './ButtonPage';
import { ComponentDot } from './ComponentDot';

export interface PaginationProps {
   totalCountOfRegisters: number;
   registersPerPage?: number;
   currentPage?: number;
   onPageChange: (page: number) => void;
};

export const Pagination: FunctionComponent<PaginationProps> = ({ 
   onPageChange, totalCountOfRegisters, registersPerPage = 10, currentPage = 1
}) => {
   const { 
      initialPageItem, 
      lastPage,
      maxItemPerPage,
      nextPages,
      previousPages,
      siblingsCount
   } = usePagination(currentPage, registersPerPage, totalCountOfRegisters);

   return(
      <Stack
         direction={["column", "row"]}
         mt="8"
         justify="space-between"
         align="center"
         spacing="6"
      >
         <Box>
            <strong>{initialPageItem}</strong> - <strong>{maxItemPerPage}</strong> de {totalCountOfRegisters}
         </Box>

         <Stack direction="row" spacing="2">
            {
               currentPage > (1 + siblingsCount) && (
                  <>
                     <ButtonPage 
                        number={1}
                        onPageChange={onPageChange}
                     />
                     { 
                        currentPage > (2 + siblingsCount) && <ComponentDot/>
                     }
                  </>
               )
            }

            {
               previousPages.length > 0 && previousPages.map(page => 
                  <ButtonPage key={page} number={page} onPageChange={onPageChange}/>
               )
            }
            <ButtonPage isCurrent number={currentPage} onPageChange={onPageChange}/>

            {
               nextPages.length > 0 && nextPages.map(page => 
                  <ButtonPage key={page} number={page} onPageChange={onPageChange}/>
               )
            }

            {
               (currentPage + siblingsCount) < lastPage && (
                  <>
                     { 
                        (currentPage + 1 + siblingsCount) < lastPage && <ComponentDot/>
                     }
                     <ButtonPage number={lastPage} onPageChange={onPageChange}/>
                  </>
               )
            }
         </Stack>
      </Stack>
   );
};