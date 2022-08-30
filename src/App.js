import './App.css';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer saludo="BIENVENIDO A SKATESHOP"/>
        <ItemDetailContainer/>
      </main>
    </>
  );
}

export default App;
