import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Bredcrums from '../Components/BredCrums/BredCrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Description from '../Components/Description/Description'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'

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
      <RelatedProduct/>
    </div>
  )
}

export default Product
