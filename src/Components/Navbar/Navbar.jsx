import React, { useContext, useRef, useState } from 'react'
import "./Navbar.css"
import logo from "../../Assetes/logo.png"
import cart_icon from "../../Assetes/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
 import nav_dropdown from "../../Assetes/download.jpeg"
function Navbar() {
    const [menu,setMenu] = useState("shop")
    const {getCartItemCount} = useContext(ShopContext)
    const manuRef = useRef()

    const dropdowntoggel = (e) => {
      manuRef.current.classList.toggle("nav-menu-visible")
      e.target.classList.toggle('open')
    }
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <img src={logo}/>
            <p>SHOPPER</p>
        </div>
        <img className='nav-dropdown' onClick={dropdowntoggel} width={100} src={nav_dropdown} alt="" />
        <ul ref={manuRef} className='nav-menu'>
            <li onClick={()=>setMenu("shop")} ><Link style={{textDecoration:"none"}} to="/">Shop</Link>{menu === "shop" ? <hr/>:<></>}</li>
            <li onClick={()=>setMenu("menu")} ><Link style={{textDecoration:"none"}} to="/mens">Men</Link>{menu === "menu" ? <hr/>:<></>} </li>
            <li onClick={()=>setMenu("women")} ><Link style={{textDecoration:"none"}} to="/women">Women</Link>{menu === "women" ? <hr/>:<></>}</li>
            <li onClick={()=>setMenu("kids")} ><Link style={{textDecoration:"none"}} to="/kids">Kids</Link>{menu === "kids" ? <hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
         <Link to="/login"><button>Login</button></Link>  
          <Link to="/cart"><img src={cart_icon} alt=''/> </Link> 
           <div className='nav-cart-count'>{getCartItemCount()}</div>
        </div>  

    </div>
  )
}

export default Navbar
