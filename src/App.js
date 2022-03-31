import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';

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
