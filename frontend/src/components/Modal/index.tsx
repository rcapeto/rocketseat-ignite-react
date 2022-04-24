import { FunctionComponent } from "react";
import { 
   Modal, 
   ModalOverlay, 
   ModalHeader, 
   ModalContent, 
   ModalCloseButton, 
   ModalBody,
   Text,
   ModalFooter,
   Button,
   Icon,
   VStack
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdError, MdCheckCircle } from 'react-icons/md';

import { useModal } from '../../context/ModalContext';

interface ModalComponentProps {
   message: string;
   type: 'error' | 'success';
};

export const ModalComponent: FunctionComponent<ModalComponentProps> = ({ 
   message, type
}) => {
   const { isOpen, onClose } = useModal();
   const router = useRouter();
   
   const title = type === 'error' ? 'Erro' : 'Sucesso';
   const color = type === 'success' ? 'green.600' : 'red.600';
   const hoverColor = type === 'success' ? 'green.800' : 'red.800';
   const icon = type === 'success' ? MdCheckCircle : MdError;

   const handleCloseModal = () => {
      onClose();
      router.push('/users');
   };

   return(
      <Modal isOpen={isOpen} onClose={onClose} closeOnEsc isCentered>
        <ModalOverlay />
        <ModalContent bg="gray.700">
            <ModalHeader>
               {title}
            </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={3}>
               <Icon as={icon} fontSize="50" color={color}/>
               <Text>{message}</Text>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} bg="gray.600" _hover={{ bg: 'gray.800' }} onClick={onClose}>
               Cancelar
            </Button>
            <Button 
               colorScheme='blue' 
               onClick={handleCloseModal} 
               bg={color}
               _hover={{ 
                  bg: hoverColor
               }}
            >
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
   );
};