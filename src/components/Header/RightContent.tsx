import { FunctionComponent } from "react";
import { Flex } from '@chakra-ui/react';

import { Notifications } from "./Notifications";
import { Profile } from "./Profile";

export const RightContent: FunctionComponent = () => {
   return(
      <Flex
         align="center"
         ml="auto"
      >
         <Notifications />
         <Profile />
   </Flex>
   );
};