import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header/index';
import {GlobalStyle} from './global'
import Modal from 'react-modal';
import {useState} from 'react'
import { NewTransactionModal } from './components/NewTransactionModal/NewTransactionModal';


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
    <>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
     <Dashboard/>
     <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
    <GlobalStyle/>
    </>
  );
}

export default App;
