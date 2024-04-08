import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const getItems = async () => {
  
  return [
    { id: 1, title: 'Item 1', description: 'Descrição do item 1', price: 10, pictureUrl: 'https://example.com/item1.jpg' },
    { id: 2, title: 'Item 2', description: 'Descrição do item 2', price: 20, pictureUrl: 'https://example.com/item2.jpg' },
    { id: 3, title: 'Item 3', description: 'Descrição do item 3', price: 30, pictureUrl: 'https://example.com/item3.jpg' }
  ];
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const itemsData = await getItems();
      setItems(itemsData);
    };

    fetchItems();
  }, []);

  return (
    <div className="item-list-container">
      <h2>Lista de Itens</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
