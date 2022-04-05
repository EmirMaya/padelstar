import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';
import ItemCounter from './components/ItemCounter/ItemCounter'
const App = () => {
  const title = "PADELSTAR";




  return (
    <>

        <header className="App-header">
          <NavBar name={title}/>
          <ItemListContainer greeting={'Productos:'}/>
        </header>
 
    </>
  );
}

export default App;
