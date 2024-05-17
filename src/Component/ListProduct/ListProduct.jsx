import React, { useEffect, useState } from 'react'
import "./ListProduct.css"
import axios from 'axios'
import cross_icon from "../../assets/cross_icon.png"
function ListProduct() {

  const [getProducts,setGetProducts] = useState([])

  const fetchdata = () => {
    axios.get("http://localhost:4000/product/getallproduct")
    .then((res) => setGetProducts(res.data))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchdata()
  },[])
  console.log("getproducts",getProducts)

  const remove_product = async (id) => {
    console.log("hsdsdsdhhdhsdhjahdjsh",id)
    await fetch(`http://localhost:4000/product/removeproduct`,{
    method:"POST",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json" 
    },
    body:JSON.stringify({id})
    })
    fetchdata()
  } 

  return (
    <div className='list-product'> 
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old_price</p>
        <p>New_price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {getProducts?.map((items,index) => {
          console.log(items.image)
          return <> <div key={index} className='listproduct-format-main listproduct-format'>
            <img width={100} src={items?.image} alt="" />
            <p>{items.name}</p>
            <p>${items.old_price}</p>
            <p>${items.new_price}</p>
            <p>{items.category}</p>
            <img onClick={()=>remove_product(items.id)} className='listproduct-remove-icon' src={cross_icon} alt="" />
          </div>
          <hr/>
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct
