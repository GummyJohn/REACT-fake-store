import fetchData from '../JS/api'
import ItemsContainer from './ItemsContainer';
import { useState, useLayoutEffect } from 'react';
import '../styles/home.css';

const Home = ({onClick}) => {
  const {data, error} = fetchData('https://fakestoreapi.com/products');
  const [category, setCategory] = useState([]);

  useLayoutEffect(() => {setCategory(data)}, [data])
  
  function categoryChange(e){
    const select = e.target.value.toLowerCase();

    const categoryArr = data.filter((item) => item.category.toLowerCase() === select);
    
    if(select !== 'all'){
      setCategory(categoryArr)
    }else{
      setCategory(data)
    }
  }

  return (
    <div className='home-container'>

      <div className="drop-down-container">
        <select className='drop-down' onChange={categoryChange}>
          <option value="all">Filter by Category</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>

      <div className="home-inner-container">
        {error && 
        <h3 className='error'>
          Sorry! Something went Wrong 
        </h3>
        }

        {category && category.map((item) => {
          return (
            <ItemsContainer 
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rate={item.rating.rate}
              count={item.rating.count}
              onClick={onClick}
              value={JSON.stringify(item)}
            />
            )
          })
        }

      </div>
    </div>
  )
}

export default Home