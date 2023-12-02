import {useState} from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
const [cartIsShown,setCarrtIsShown] = useState(false);

function showCartHandler() {
  setCarrtIsShown(true);
}

function showCartHandler() {
  setCarrtIsShown(false);
}

  return (
    <CartProvider>
      {cartIsShown && <div>Cart...</div>}
      <Header onShowCart={showCartHandler} />
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
