import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';
import ItemCounter from './components/ItemCounter/ItemCounter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
const App = () => {
  const title = "PADELSTAR";




  return (
    <>

        <header className="App-header">
          <NavBar name={title}/>
         {/* <ItemListContainer greeting={'Productos:'}/> */}
          <ItemDetailContainer />
        </header>
 
    </>
  );
}

export default App;
