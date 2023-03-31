import React from 'react'

const MenuItems = ({ data, item, filtered }) => {
  return (
    <div className='p-5 my-2'>
      <h5 className='p-1'>{item}</h5>
      <p className='font-bold p-1'>All</p>
      {data &&
        data.map((d, i) => {
          return (
            <p className='p-1' key={i} onClick={(e) => filtered(d.id)}>
              {d.name}
            </p>
          )
        })}
    </div>
  )
}

export default MenuItems
