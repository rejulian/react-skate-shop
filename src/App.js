import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {

  const onAdd = (count) => {
    count > 1 ? alert(`Se agregaron al carrito ${count} productos`) : alert(`Se agrego al carrito ${count} producto`)
  }

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer saludo="BIENVENIDO A SKATESHOP"/>
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
      </main>
    </>
  );
}

export default App;
