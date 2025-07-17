import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Bredcrums from '../Components/Bredcrums/Bredcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Description from '../Components/Description/Description'

const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams()

  const product = all_product.find((e) => e.id === Number(productId))

  if (!product) {
    return <div>Product not found</div>; // prevent crash
  }

  return (
    <div>
      <Bredcrums product={product} />
      {/* More product content */}
      <ProductDisplay product={product}/>
      <Description/>
    </div>
  )
}

export default Product
