import React, { Component } from "react";
import Link from 'next/link'
import Products from '../components/products'
import Layout from '../components/layout'

class Shop extends Component {
  render() {
    return (
    <Layout>
      <div>
        <div className="shop-nav">
          <span>
            <Link href="/">
              <img
                className="home"
                src="https://res.cloudinary.com/kvge/image/upload/c_scale,w_60/v1525301020/web-page-home.png"
                alt="home-button"
              />
            </Link>
          </span>
          {/* <span>
            <Link href="/cart">
              <img
                className="cart"
                src="https://res.cloudinary.com/kvge/image/upload/c_scale,w_60/v1525301193/shopping-cart_1.png"
                alt="cart-button"
              />
            </Link>
          </span> */}
        </div>
        <div className="mobile-products"><Products/></div>

        <div className="shoptop-nav">
          <span>
            <Link href="/">
              <img
                className="home"
                src="https://res.cloudinary.com/kvge/image/upload/c_scale,w_60/v1525671763/web-page-home-whiteshadow.png"
                alt="home-button"
              />
            </Link>
          </span>
          <span>
            <img
              className="bogo-desk-shop"
              src="https://res.cloudinary.com/kvge/image/upload/c_scale,w_100/v1525658069/logo-3-KVGE-whiteshadow.png"
              alt="bogo"
            />
          </span>
          {/* <span>
            <Link href="/cart">
              <img
                className="cart"
                src="https://res.cloudinary.com/kvge/image/upload/c_scale,w_60/v1525672175/shopping-cart-whiteshadow.png"
                alt="cart-button"
              />
            </Link>
          </span> */}
        </div>
        <div className="shoptop-container">
          <div className="shoptop"><Products /></div>
        </div>
      </div>
      </Layout>
    );
  }
}

export default Shop;
