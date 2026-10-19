import React, { useState } from 'react';
import ProductList from './components/productlist';

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>React Product Dashboard</h1>
      
      {/* İsim input alanı ve selamlama */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Hello, {name}</p>
      </div>

      {/* Ürünleri göster/gizle butonu */}
      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>

      {/* Koşullu render */}
      {showProducts && <ProductList />}
    </div>
  );
}

export default App;