
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { CartContextProvider } from './components/context/CartContext';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';


const App = () => {
  const title = "PADELSTAR";



  return (
    <main className="App-header">

      <CartContextProvider>
        <BrowserRouter>
          <NavBar name={title} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/list/:categoryId' element={<ItemListContainer greeting={'Productos:'} />} />
            <Route path='/list' element={<ItemListContainer greeting={'Productos:'} />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>


    </main>
  );
}

export default App;
