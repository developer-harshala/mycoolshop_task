import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  feature,
  featuredProduct,
  materialProduct,
  materials,
  product,
} from '../utils/appSlice'
import {
  // COLORS_API,
  FEATURED_API,
  MATERIAL_API,
  PRODUCTS_API,
  TOKEN,
} from '../utils/constants'
import ImageCard from './ImageCard'

const MainContainer = ({ setCart, cart, materialFilter, feature }) => {
  const [products, setProducts] = useState([])
  // const [colors, setColors] = useState([])
  const [material, setMaterial] = useState([])
  const [featured, setFeatured] = useState([])
  const dispatch = useDispatch()
  const ProductMaterial = useSelector((store) => store.products.material)
  const featureProduct = useSelector(
    (store) => store.products.featured.productId
  )

  useEffect(() => {
    getProducts()
    // getColors()
    getMaterial()
    getFeatured()
  }, [])
  const getProducts = async () => {
    const data = await fetch(PRODUCTS_API, {
      method: 'GET',
      headers: { Authorization: `Bearer ${TOKEN}` },
    })
    const json = await data.json()
    setProducts(json.products)
    dispatch(product(json.products))
  }
  // const getColors = async () => {
  //   const data = await fetch(COLORS_API, {
  //     method: 'GET',
  //     headers: { Authorization: `Bearer ${TOKEN}` },
  //   })
  //   const json = await data.json()
  //   setColors(json.colorsProduct)
  // }
  const getMaterial = async () => {
    const data = await fetch(MATERIAL_API, {
      method: 'GET',
      headers: { Authorization: `Bearer ${TOKEN}` },
    })
    const json = await data.json()
    setMaterial(json.material)
    dispatch(materialProduct(json.material))
  }
  const getFeatured = async () => {
    const data = await fetch(FEATURED_API, {
      method: 'GET',
      headers: { Authorization: `Bearer ${TOKEN}` },
    })
    const json = await data.json()
    setFeatured(json.featured)
    dispatch(featuredProduct(json.featured))
  }

  console.log('materialFiltered', materialFilter)
  return (
    <div className='flex flex-wrap'>
      {products.map((d, i) => {
        return (
          <ImageCard
            data={d}
            material={ProductMaterial}
            setCart={setCart}
            cart={cart}
          />
        )
      })}
    </div>
  )
}

export default MainContainer
