import { useState, createContext } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { CartContextProvider } from './components/context/CartContext';
import Cart from './components/Cart/Cart';
// export const Context = createContext()

const App = () => {
  const title = "PADELSTAR";
  // const [cart, setCart] = useState([])


  return (
    <>

      <header className="App-header">
        {/* <Context.Provider value={{cart, setCart}}> */}
        <CartContextProvider>
          <BrowserRouter>
            <NavBar name={title} />
            <Routes>
              <Route path='/list/:categoryId' element={<ItemListContainer greeting={'Productos:'} />} />
              <Route path='/list' element={<ItemListContainer greeting={'Productos:'} />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
        {/* </Context.Provider> */}

        {/* <ItemListContainer greeting={'Productos:'} />
        <ItemDetailContainer /> */}
      </header>

    </>
  );
}

export default App;
