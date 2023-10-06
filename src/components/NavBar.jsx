import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../styles/navbar.css'

const NavBar = ({size}) => {
  return (
    <div className='navbar'>
      <h2>DL Shop</h2>

      <div className="link-container">
        <Link to='/'>Home</Link>
        <Link to='/cart' className='cart'>
          <FontAwesomeIcon icon={faCartShopping}/>
          <span className='item-number'>{size}</span>
        </Link>
      </div>
    </div>
  )
}

export default NavBar