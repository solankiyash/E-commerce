import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../../Assetes/star_icon.png';
import star_dull_icon from '../../Assetes/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import LoginRegister from '../../Pages/LoginRegister';
import { useNavigate } from 'react-router-dom';

function ProductDisplay(props) {
  const { addToCart } = useContext(ShopContext);
  const { product } = props;
  const [selectedSize, setSelectedSize] = useState([]);
  const navigate = useNavigate()

  const handleSizeSelect = (size) => {
    setSelectedSize((pre) => ([...pre,size]));
  };

  const handleAddToCart = () => {

    if(!localStorage.getItem("auth-token")){
      navigate("/login")
    }else{

    
    if (selectedSize) {
      addToCart({ ...product?.getdata, size: selectedSize });
    } else {
      alert('Please select a size');
    }
  };
}

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          <img src={product?.getdata?.image} alt='' />
          <img src={product?.getdata?.image} alt='' />
          <img src={product?.getdata?.image} alt='' />
          <img src={product?.getdata?.image} alt='' />
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product?.getdata?.image} alt='' />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product?.getdata?.category}</h1>
        <div className='productdisplay-right-star'>
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_dull_icon} alt='' />
          <p>(122)</p>
        </div>
        <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-prices-old'>${product?.getdata?.old_price}</div>
          <div className='productdisplay-right-prices-new'>${product?.getdata?.new_price}</div>
        </div>
        <div className='productdisplay-right-description'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel id doloribus nobis ad provident unde non reprehenderit, et maiores voluptate.
        </div>
        <div className='productdisplay-right-size'>
          <h1>Select Size</h1>
        </div>
        <div className='productdisplay-right-sizes'>
          {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <div
              key={size}
              className={`productdisplay-right-sizes  ${selectedSize === size ? 'active' : 'inactive'}`}
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </div>
          ))}
        </div>
        <button onClick={handleAddToCart}>ADD TO CART</button>
        <p className='productdisplay-right-category'>
          <span>Category :</span> Women, T-Shirt, Crop Top
        </p>
        <p className='productdisplay-right-category'>
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
