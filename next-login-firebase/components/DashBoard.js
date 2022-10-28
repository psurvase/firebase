import React, { useState } from 'react'
import AddProduct from './product/AddProduct'
import ProductList from './product/ProductList'

const DashBoard = () => {
  const [getProductId, setGetProductId] = useState(" ")

  const getData = (id) => {
    setGetProductId(id)
  }
  return (
    <div>
      <AddProduct getProductId={getProductId} setGetProductId={setGetProductId} />
      <ProductList getData={getData} />
    </div>
  )
}

export default DashBoard