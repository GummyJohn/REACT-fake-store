import { Link } from 'react-router-dom'
import { useState } from 'react';
import '../styles/cart.css'
import { useEffect } from 'react';

const Cart = ({cart, setCart}) => { 
  function remove(cartItem){
    const filtered = cart.filter((item) => cartItem.id !== item.id);

    setCart(filtered);
  }

  function quantities(id, sign){
    if(sign === '+'){
      setCart( 
        (cart) => cart.map((item) => 
          id === item.id ? 
          {...item, quantity: item.quantity + (item.quantity < 10 ? 1 : 0)} : item))
    }

    else{
      setCart( 
        (cart) => cart.map((item) => 
          id === item.id ? 
          {...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0)} : item))
    }
  }

  const sum = cart.reduce(
    (total, curr) => (total + curr.price) * curr.quantity, 0
  )

  return (
    <div className='cart-container'>
      {
        cart.length === 0 
        ? 
        <div className='empty-container'>
          <h1 className='empty'>Your Cart is Curently Empty!</h1>
        </div>
        : 
        <h2>TOTAL: <span className='total'>{sum.toFixed(2)}</span></h2>
      }

      {cart.map((cartItem) => {
        return (

          <div className='cart-item' key={cartItem.id}>
            <div className='cart-img-container'>
              <img src={cartItem.image} alt="image" />
            </div>

            <div className='cart-details'>
              <Link to={`/products/${cartItem.id}`}>{cartItem.title}</Link>
              {
                cartItem.size !== undefined && 
                <p className='cart-size'>Size: {cartItem.size}</p>
              }
            </div>

            <h3>${(cartItem.price * cartItem.quantity).toFixed(2)}</h3>
              
            <div className='controls'>
              <div className="quanities">
                <button onClick={() => quantities(cartItem.id, '-')}>
                  -
                </button>
                <span>{cartItem.quantity}</span>
                <button  onClick={() => quantities(cartItem.id, '+')}>
                  +
                </button>
              </div>

              <button 
                onClick={() => remove(cartItem)} 
                className='remove'
              >
                Remove
              </button>
            </div>

          </div>

        )
      })}
    </div>
  )
}


export default Cart