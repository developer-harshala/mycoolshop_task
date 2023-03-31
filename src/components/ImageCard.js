import React from 'react'

const ImageCard = ({ data, material, setCart, cart }) => {
  const addToCart = (product) => {
    let newCart = [...cart]
    let itemInCart = newCart.find((item) => product.name === item.name)
    if (itemInCart) {
      itemInCart.quantity++
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      }
      newCart.push(itemInCart)
    }
    setCart(newCart)
  }

  return (
    <div className='p-5 m-5'>
      <div className='hover:opacity-25'>
        <img alt='product-logo' src={data.image} className='h-[33rem]' />
      </div>
      <h2 className='font-bold py-2'>{data.name} </h2>
      <div className='flex'>
        <p>{'Black'.toUpperCase()} </p>
        <p className='pl-2'>{'Color'.toUpperCase()} </p>
      </div>
      <p style={{ color: '#4a353c', fontWeight: '500' }}> INR {data.price}</p>
      <button onClick={() => addToCart(data)}>Add to Cart</button>
    </div>
  )
}

export default ImageCard
