import React from 'react';
let a = 1
const Item = ({ item }) => {
  return (
    <div className="item">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <img src={item.pictureUrl} alt={item.title} />
    </div>
  );
};

export default Item;
