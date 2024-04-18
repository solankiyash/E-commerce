import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Discription from '../Components/DiscriptionBox/Discription'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

function Product() {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()


  

// console.log(all_product,"lkkkkkkkkkkkkkk")
  const product = all_product?.find((e) => e.id === Number(productId))
  return (
    <div>
       <Breadcrum product={product}/>  
       <ProductDisplay product={product}/>
       <Discription/>
       <RelatedProducts/>
    </div>
  )
}

export default Product
