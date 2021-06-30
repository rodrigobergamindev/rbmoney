import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header/index';
import {GlobalStyle} from './global'
import Modal from 'react-modal';
import {useState} from 'react'
import { NewTransactionModal } from './components/NewTransactionModal/NewTransactionModal';
import {TransactionsProvider} from '../src/TransactionsContext'

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }

  return (
    <TransactionsProvider>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
     <Dashboard/>
     <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}/>
    <GlobalStyle/>
    </TransactionsProvider>
  );
}

export default App;
