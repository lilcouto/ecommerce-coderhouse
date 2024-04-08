export const getItems = async () => {
    
    return [
      { id: 1, title: 'Item 1', description: 'Descrição do item 1', price: 10, pictureUrl: 'https://example.com/item1.jpg' },
      { id: 2, title: 'Item 2', description: 'Descrição do item 2', price: 20, pictureUrl: 'https://example.com/item2.jpg' },
      { id: 3, title: 'Item 3', description: 'Descrição do item 3', price: 30, pictureUrl: 'https://example.com/item3.jpg' }
    ];
  };
  
  export const getItem = async () => {
   
    return { id: 1, title: 'Item Detalhado', description: 'Descrição do item detalhado', price: 50, pictureUrl: 'https://example.com/item.jpg' };
  };
  