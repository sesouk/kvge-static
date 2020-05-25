import React, { useState } from 'react';

const Products = () => {
  const [inventory] = useState([
    {
      name: 'KVGE Big Back - White',
      imageFront: '/front-white.png',
      imageBack: '/back-white.png',
      price: 25,
      desc: 'White T-Shirt with black screen printed chest logo and large back printed logo.',
      id: 1
    }, 
    {
      name: 'KVGE Big Back - Black',
      imageFront: '/front-black.png',
      imageBack: '/back-black.png',
      price: 30,
      desc: 'Black T-Shirt with white screen printed chest logo and large back printed logo.',
      id: 2
    }, 
    {
      name: 'KVGE Big Back - White - F&F',
      imageFront: '/ff-front-white.png',
      imageBack: '/ff-back-white.png',
      price: 0,
      desc: 'White T-Shirt with tiffany screen printed chest logo and large back printed logo. This item is a friends & family only colorway.',
      id: 3
    }, 
    {
      name: 'KVGE Big Back - Black - F&F',
      imageFront: '/ff-front-black.png',
      imageBack: '/ff-back-black.png',
      price: 0,
      desc: 'Black T-Shirt with tiffany screen printed chest logo and large back printed logo. This item is a friends & family only colorway.',
      id: 4
    }])
    

  const products = inventory.map(p => {
    return( <div className="product-container" key={p.id}>
      <p className="product">{p.name}</p>
      <div className="shirt">
        <img src={p.imageFront} alt="shirt-front" />
        <img src={p.imageBack} alt="shirt-back" />
      </div>
      <p className="info">{p.desc}</p>
      <p className="price">{p.price > 0 ? `$${p.price}` : 'Not for Sale'}</p>
      <div className="button-holder">
        <button className="atc" onClick={() => alert('Purchasing options coming soon!')}>
          Add To Cart
        </button>
      </div>
    </div>)
  })

  return (
    <>
      {products}
    </>
  );
};

export default Products;