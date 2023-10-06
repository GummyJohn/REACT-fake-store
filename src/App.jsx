import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import Item from './components/Item'
import { useEffect } from 'react'

function App() {
  const localStorageCart = JSON.parse(localStorage.getItem('cart'));

  const [cart, setCart] = useState(localStorageCart || [])

  function addCart(e){
    const item = JSON.parse(e.target.value);
    
    if(item.category.includes('clothing') && !(item.title.includes('Backpack'))){
      if(item.size === '' || item.size === undefined) {
        alert(" Item Rquires a Size! Go TO ITEM PAGE TO SELECT SIZE") 
        return;
      }
    }
    
    for(let i = 0; i < cart.length; i++){
      if(cart[i].id === item.id){
        alert('Item is Already in Cart!')
        return;
      }
    }
    
    let itemObj = {};
    itemObj.id =item.id;
    itemObj.title =item.title;
    itemObj.image =item.image;
    itemObj.price =item.price;
    itemObj.size = item.size;
    itemObj.quantity = 1;
    
    setCart([...cart, itemObj])
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  return (
    <BrowserRouter>
      <NavBar size={cart.length}/>
      <Routes>
        <Route path='/' element={ <Home onClick={addCart} /> }/>
        <Route path='/cart' element={ <Cart cart={cart} setCart={setCart}/> }/>
        <Route path='/products/:id' element={<Item onClick={addCart}/>} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App
