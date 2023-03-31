import React, { useState } from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

const Body = () => {
  const [filter, setFilter] = useState('')
  return (
    <>
      <div className='flex'>
        <Sidebar
          filtered={(data) => {
            return setFilter(data)
          }}
        />
        <MainContainer materialFilter={filter} />
      </div>
    </>
  )
}

export default Body
