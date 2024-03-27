import React, { useState } from 'react';
import NavBar from './NavBar.js'; // Importe o componente NavBar corretamente

function App() {
    const [cartItems, setCartItems] = useState([]);

    return (
        <div className="App">
            <NavBar cartItems={cartItems} />
        </div>
    );
}

export default App;
