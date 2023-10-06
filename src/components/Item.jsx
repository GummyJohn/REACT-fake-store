import React from 'react'
import { useState, useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../JS/api'
import '../styles/itempage.css'
import Sizes from './Sizes'

const Item = ({onClick}) => {
  const [size, setSize] = useState('')

  const { id } = useParams()
  const {data, error} = fetchData(`https://fakestoreapi.com/products/${id}`)
  const {image, title, price, description, category} = data;

  return (
    <div className='item-page-container'>
      {error &&  <h3 className='error'>Sorry! Something went Wrong</h3>}

      {data && (
          <div className='item-inner-container'>

            <div className="item-inner-img">
              <img src={image} alt="item" />
            </div>

            <div className="item-inner-content">
              <h2>{title}</h2>
              <h3>$ {price}</h3>                          

              {
                (
                  (category === "men's clothing" || 
                  category === "women's clothing") && 
                  !(data.title.includes('Backpack'))
                ) && 
                  <Sizes onClick={(e) =>  setSize(e.target.value)}/>
              }

              <p> <strong>Description: </strong>{description}</p>
              
              <button 
                className='add' 
                onClick={onClick}
                value={JSON.stringify({...data, size: `${size}`})}
              >
                Add to Cart
              </button>
            </div>

          </div>
        )
      }
    </div>
  )
}

export default Item