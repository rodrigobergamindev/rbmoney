import Modal from 'react-modal';
import { Container } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps) {
    return (
        
      <Modal isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
         
        <Container>
            <h2>Cadastrar Transação</h2>
            <form>

                <input placeholder="Título"/>
                <input placeholder="Valor" type="number"/>
                <input placeholder="Categoria"/>
                <button type="submit">Cadastrar</button>
            </form>
          </Container>
      </Modal>

    )
}