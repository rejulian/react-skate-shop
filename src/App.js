import './App.css';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <header>
          <NavBar/>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<ItemListContainer saludo="BIENVENIDO A SKATESHOP"/>}/>
            <Route path='/category/:id' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </main>
        <footer>
          <Footer/>
        </footer>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
