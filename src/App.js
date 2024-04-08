import React from 'react';
import './App.css';
import NavBar from './NavBar';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer'; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <CartWidget />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
