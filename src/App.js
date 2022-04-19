import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';
import ItemCounter from './components/ItemCounter/ItemCounter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const App = () => {
  const title = "PADELSTAR";




  return (
    <>

      <header className="App-header">

        <BrowserRouter>
          <NavBar name={title} />
          <Routes>
            <Route path='/list/:categoryId' element={<ItemListContainer greeting={'Productos:'}/>}/>
            <Route path='/list' element={<ItemListContainer greeting={'Productos:'}/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart'  />
          </Routes>
        </BrowserRouter>

        {/* <ItemListContainer greeting={'Productos:'} />
        <ItemDetailContainer /> */}
      </header>

    </>
  );
}

export default App;
