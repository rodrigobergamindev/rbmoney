import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox} from './styles';
import closeImg from '../../../assets/close.svg'
import incomeImg from '../../../assets/income.svg'
import outcomeImg from '../../../assets/outcome.svg'
import {FormEvent, useState} from 'react'
import { api } from '../../../services/api';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps) {


  const[title, setTitle] = useState('')
  const[value, setValue] = useState(0)
  const[category, setCategory] = useState('')
  const[type, setType] = useState('deposit')

   function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type
    }

    api.post('/transactions', data)
   }


    return (
        
      <Modal isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
         
        <Container onSubmit={handleCreateNewTransaction}> 
            <button type="button" className="react-modal-close" onClick={onRequestClose}>
              <img src={closeImg} alt="Fechar modal"/>
            </button>
            <h2>Cadastrar Transação</h2>
            

                <input placeholder="Título"
                value={title}
                onChange={event => setTitle(event.target.value)}
                />


                <input placeholder="Valor" type="number"
                value={value}
                onChange={event => setValue(Number(event.target.value))}/>

                <TransactionTypeContainer>
                    <RadioBox
                      type="button"
                      isActive={type === 'deposit'}
                      onClick={() => setType('deposit')}
                      activeColor="green"
                    >

                      <img src={incomeImg} alt="Entrada"></img>
                      <span>Entrada</span>

                    </RadioBox>


                    <RadioBox
                      type="button"
                      isActive={type === 'withdraw'}
                      onClick={() => setType('withdraw')}
                      activeColor="red"
                    >

                      <img src={outcomeImg} alt="Saída"></img>
                      <span>Saída</span>
                    </RadioBox>
                  </TransactionTypeContainer>

                <input placeholder="Categoria"
                  value={category}
                  onChange={event => setCategory(event.target.value)}
                
                />
                <button type="submit">Cadastrar</button>
           
          </Container>
      </Modal>

    )
}