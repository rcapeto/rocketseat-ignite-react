import { useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { createContext, useContext, ReactNode, FunctionComponent, useEffect } from 'react';

interface Provider {
   children: ReactNode;
}

interface ContextValues {
   isOpen: boolean;
   onOpen: () => void;
   onClose: () => void;
   onToggle: () => void;
   isControlled: boolean;
   getButtonProps: (props?: any) => any;
   getDisclosureProps: (props?: any) => any;
}

const SidebarDrawerContext = createContext({} as ContextValues);

export const SidebarDrawerProvider: FunctionComponent<Provider> = ({ children }) => {
   const disclosure = useDisclosure();
   const router = useRouter();

   useEffect(() => {
      disclosure.onClose();
   }, [router.asPath]); //troca de rota => fechar a sidebar

   return(
      <SidebarDrawerContext.Provider value={disclosure}>
         { children }
      </SidebarDrawerContext.Provider>
   );
};

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);