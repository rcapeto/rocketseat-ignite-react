import { FunctionComponent } from "react";
import { Flex } from '@chakra-ui/react';

import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";
import { RightContent } from "./RightContent";

import { system_config } from '../../config';

export const Header: FunctionComponent = () => {
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
      >
         <Logo />
         <SearchBox />
         <RightContent />
      </Flex>
   );
};