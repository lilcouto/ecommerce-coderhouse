import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const getItem = async () => {
  
  return { id: 1, title: 'Item Detalhado', description: 'Descrição do item detalhado', price: 50, pictureUrl: 'https://example.com/item.jpg' };
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const itemData = await getItem();
      setItem(itemData);
    };

    fetchItem();
  }, []);

  return (
    <div className="item-detail-container">
      <h2>Detalhes do Item</h2>
      {item ? <ItemDetail item={item} /> : <p>Carregando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
