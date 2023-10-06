import React from 'react'

const Sizes = ({onClick}) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  return (
    <div className='sizes'>
      <p>Sizes:</p>
      <div className='size-btn'>
        {
          sizes.map((size) => 
            <button 
              key={size} 
              onClick={onClick} 
              value={size}
            >
              {size}
            </button>
          )
        }
      </div>
    </div>
  )
}

export default Sizes