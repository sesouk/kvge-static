import React, { useState } from 'react';

const Products = () => {
  const [inventory] = useState([
    {
      name: 'KVGE Big Back - White',
      imageFront: 'https://res.cloudinary.com/kvge/image/upload/c_scale,w_600/v1525285957/Small-Logo-Front-Mock-Up.png',
      imageBack: 'https://res.cloudinary.com/kvge/image/upload/c_scale,w_600/v1525285958/Large-Logo-Back.png',
      price: 25,
      desc: 'White T-Shirt with black screen printed chest logo and large back printed logo.',
      id: 1
    }, 
    {
      name: 'KVGE Big Back - Black',
      imageFront: 'https://res.cloudinary.com/kvge/image/upload/c_scale,w_600/v1525285958/Small-Logo-Front-Mock-Up-Black.png',
      imageBack: 'https://res.cloudinary.com/kvge/image/upload/c_scale,w_600/v1525285957/Large-Logo-Back-Black.png',
      price: 30,
      desc: 'Black T-Shirt with white screen printed chest logo and large back printed logo.',
      id: 2
    }, 
    {
      name: 'KVGE Big Back - White - F&F',
      imageFront: 'https://res.cloudinary.com/kvge/image/upload/c_scale,w_600/v1525285985/F_F-Mint-On-White-Front.png',
      imageBack: 'https://res.cloudinary.com/kvge/image/upload/c_scale,w_600/v1525285983/F_F-Mint-On-White-Back.png',
      price: 0,
      desc: 'White T-Shirt with mint screen printed chest logo and large back printed logo. This item is a friends & family only colorway.',
      id: 3
    }, 
    {
      name: 'KVGE Big Back - Black - F&F',
      imageFront: 'https://res.cloudinary.com/kvge/image/upload/c_scale,w_600/v1525285983/F_F-Tiff-On-Black-Front.png',
      imageBack: 'https://res.cloudinary.com/kvge/image/upload/c_scale,w_600/v1525285984/F_F-Tiff-On-Black-Back.png',
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