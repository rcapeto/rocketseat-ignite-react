import { createContext, useContext, FunctionComponent, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

import { Provider } from '../@types';
import { ModalComponent } from '../components/Modal';

type MessageType = 'error' | 'success';

interface ModalState {
   type: MessageType;
   message: string;
}

interface ModalContextValues {
   onClose?(): void;
   dispatchModal: (message: string, type: MessageType) => void;
   isOpen: boolean;
}

const ModalContext = createContext({} as ModalContextValues);

export const ModalProvider: FunctionComponent<Provider> = ({ children }) => {
   const [modalState, setModalState] = useState<ModalState>({ message: '', type: 'success' });

   const { onOpen, onClose, isOpen } = useDisclosure();

   const dispatchModal = (message: string, type: MessageType) => {
      setModalState({ message, type });
      onOpen();
   };

   return(
      <ModalContext.Provider value={{ onClose, isOpen, dispatchModal }}>
         { children }
         <ModalComponent {...modalState}/>
      </ModalContext.Provider>
   );
};

export const useModal = () => useContext(ModalContext);