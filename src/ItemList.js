import React, { useState, useEffect } from 'react';
import Item from './Item';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      // Simulação de chamada assíncrona com um setTimeout
      setTimeout(() => {
        const mockItems = [
          { id: 1, title: 'Item 1', description: 'Descrição do item 1', price: 10, pictureUrl: 'https://example.com/item1.jpg' },
          { id: 2, title: 'Item 2', description: 'Descrição do item 2', price: 20, pictureUrl: 'https://example.com/item2.jpg' },
          { id: 3, title: 'Item 3', description: 'Descrição do item 3', price: 30, pictureUrl: 'https://example.com/item3.jpg' },
        ];
        setItems(mockItems);
      }, 2000); // Emulação de atraso de 2 segundos
    };

    fetchItems();
  }, []);

  return (
    <div className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
