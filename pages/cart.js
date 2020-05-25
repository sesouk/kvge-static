import React, { Component } from 'react';
import Link from 'next/link'

class Cart extends Component {
    render() {
        // let cart = this.props.cart.map((e,i) => {
        //     return <div className='product-container-cart' key={i}>
        //         <p className='product'>{e.name}</p>
        //         <div className='shirt-cart'>
        //         <img src={e.image} alt="shirt-front"/>
        //         </div>
        //         <p className='price'>${e.price}</p>
        //         <div className='button-holder'>
        //         <button className='rfc' onClick={() => { 
        //             this.props.removeFromCart(e.id)}}>Remove from Cart</button>
        //         </div>
        //     </div>
        // })
        return (
            <div>
                <div className='cart-nav'>
                    <span>
                      <Link href='/'>
                        <img className='home' src="http://res.cloudinary.com/kvge/image/upload/v1525301020/web-page-home.png" alt="home-button"/>
                        </Link>
                        </span>
                    <span>
                      <Link href='/shop'>
                        <img className='back-to-shop' src="http://res.cloudinary.com/kvge/image/upload/v1525455530/go-back-left-arrow.png" alt='back-to-shop-button'/>
                        </Link>
                        </span>
                </div>

                    <div className='cart-top-nav'>
                    <span>
                      <Link href='/'>
                        <img className='home' src="http://res.cloudinary.com/kvge/image/upload/v1525671763/web-page-home-whiteshadow.png" alt="home-button"/>
                        </Link>
                        </span>
                    <span>
                      <Link href='/shop'>
                        <img className='back-to-shop' src="http://res.cloudinary.com/kvge/image/upload/v1525671775/go-back-left-arrow-whiteshadow.png" alt='back-to-shop-button'/>
                        </Link>
                        </span>
                </div>
                <div className='cart-containerx2'>
                <div className='cart-container'>
                {/* {cart} */}
                </div>
                </div>
            </div>
        );
    }
}

export default Cart;