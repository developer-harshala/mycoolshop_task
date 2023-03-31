import React from 'react'
import { useSelector } from 'react-redux'
import MenuItems from './MenuItems'

const Sidebar = ({ filtered }) => {
  const materialStore = useSelector((store) => store.products.material)
  return (
    <div className='w-[85rem]'>
      <MenuItems
        data={materialStore && materialStore}
        item={'Materials'}
        filtered={filtered}
      />
    </div>
  )
}

export default Sidebar
