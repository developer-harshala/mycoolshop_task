import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Head = ({ cart, featured }) => {
  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0)
  }
  return (
    <>
      <h2 className='p-5 text-3xl font-bold flex justify-center'>
        MYCOOLSHOP.COM
      </h2>
      <div className='flex bg-gray-300 py-5 justify-between'>
        <div className=''>
          <a href='/' className='p-3 m-5'>
            <span>All Products</span>
          </a>
          <span onClick={featured(true)}>Featured Products</span>
        </div>
        <div className='flex mr-12'>
          <FaShoppingCart size={25} />
          <span className='pl-2'>{getCartTotal()}</span>
        </div>
      </div>
    </>
  )
}

export default Head
