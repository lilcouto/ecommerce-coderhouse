import React from 'react';
import './App.css';
import NavBar from './NavBar';
import CartWidget from './CartWidget';
import ItemList from './ItemList'; 

function App() {
    return (
        <div className="App">
            <NavBar/>
            <CartWidget/>
            <ItemList/>
        </div>
    );
}

export default App;
