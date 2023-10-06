import { Link } from 'react-router-dom'

const ItemsContainer = ({id, image, title, price, rate, count, onClick, value}) => {

  return (
      <div className='item-container'>

        <div className="item-img">
          <img src={image} alt='item' />
        </div>

        <div className="item-content">
          <Link to={`/products/${id}`}>{title}</Link>
          <h4>$ {price}</h4>
          <p>Rating: {rate}/5</p>
          <p>SOLD: {count}</p>
        </div>

        <button 
          className='add' 
          onClick={onClick} 
          value={value}
        >
          Add to Cart
        </button>
      </div>
  )
}

export default ItemsContainer