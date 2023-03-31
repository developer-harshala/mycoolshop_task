import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Head from './components/Head'
import store from './utils/store'
import { Provider } from 'react-redux'
import MainContainer from './components/MainContainer'

const App = () => {
  const [cart, setCart] = useState([])
  const [isFeaturedProduct, setIsFeaturedProduct] = useState(false)

  //Routing
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: (
            <MainContainer
              cart={cart}
              setCart={setCart}
              feature={isFeaturedProduct}
            />
          ),
        },
      ],
    },
  ])
  return (
    <Provider store={store}>
      <Head
        cart={cart}
        featured={(data) => {
          return setIsFeaturedProduct(data)
        }}
      />
      <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App
