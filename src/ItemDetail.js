import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      <img src={item.pictureUrl} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default ItemDetail;
