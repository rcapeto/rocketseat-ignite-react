import { FunctionComponent } from "react";
import { Flex } from '@chakra-ui/react';

import { Notifications } from "./Notifications";
import { Profile } from "./Profile";

interface IRightContent {
   showProfileData: boolean;
};

export const RightContent: FunctionComponent<IRightContent> = ({
   showProfileData
}) => {
   return(
      <Flex
         align="center"
         ml="auto"
      >
         <Notifications />
         {showProfileData && <Profile /> } 
   </Flex>
   );
};