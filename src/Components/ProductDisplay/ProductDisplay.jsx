import React, { useContext, useEffect, useState } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "react-rating";
import axios from "axios";

function ProductDisplay(props) {
  const { addToCart } = useContext(ShopContext);
  const { product } = props;
  const [selectedSize, setSelectedSize] = useState([]);
  const [rating, setRating] = useState(0);
  const [rateingmodel, setRatingModel] = useState(false);
  const [getRatingData, setGetRatingData] = useState([]);
  const [review, setReview] = useState("");
  const navigate = useNavigate();

  const handleSizeSelect = (size) => {
    setSelectedSize((pre) => [...pre, size]);
  };

  const id = useParams();
  const handelRating = (e) => {
    e.preventDefault();
    const rateObject = {
      rating,
      review,
    };

    axios
      .post(
        `http://localhost:4000/product/getratingproduct/${id.productId}`,
        rateObject
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setRating(0);
    setReview("");
    setRatingModel(false)
  };
  const handleAddToCart = () => {
    if (!localStorage.getItem("auth-token")) {
      navigate("/login");
    } else {
      if (selectedSize.length > 0) {
        addToCart({ ...product?.getdata, size: selectedSize });
      } else {
        alert("Please select a size");
      }
    }
  };
  const RatingComponent = (data) => {
   return <Rating
    initialRating={data}
    readonly
    emptySymbol={<span className="icon-star-empty">&#9734;</span>}
    fullSymbol={<span className="icon-star-full">&#9733;</span>}
  />
  }
  useEffect(() => {
    axios
      .get(`http://localhost:4000/product/getreviews/${id.productId}`)
      .then((res) => setGetRatingData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product?.getdata?.image} alt="" />
          <img src={product?.getdata?.image} alt="" />
          <img src={product?.getdata?.image} alt="" />
          <img src={product?.getdata?.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product?.getdata?.image}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product?.getdata?.category}</h1>
        <div className="productdisplay-right-star">
         <div onClick={() => setRatingModel(true)} style={{ display: 'inline-block',cursor:"pointer" }}>
        {RatingComponent(getRatingData.averageRating)}
    </div>
          <p>({getRatingData.average?.length})</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            ${product?.getdata?.old_price}
          </div>
          <div className="productdisplay-right-prices-new">
            ${product?.getdata?.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel id
          doloribus nobis ad provident unde non reprehenderit, et maiores
          voluptate.
        </div>
        {rateingmodel ? (
          <div className="review-box">
            <h2>Reviews</h2>

            <form onSubmit={handelRating}>
              <Rating
                initialRating={rating}
                emptySymbol={<span className="icon-star1-empty">&#9734;</span>}
                fullSymbol={<span className="icon-star1-full">&#9733;</span>}
                onChange={(value) => setRating(value)}
              />
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write your review here..."
                rows="4"
              />
              <button type="submit">Submit Review</button>
            </form>
          </div>
        ) : (
          <>
            <div className="productdisplay-right-size">
              <h1>Select Size</h1>
            </div>
            <div className="productdisplay-right-sizes">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  className={`productdisplay-right-sizes  ${
                    selectedSize.includes(size) ? "active" : "inactive"
                  }`}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </div>
              ))}
            </div>
            <button onClick={handleAddToCart}>ADD TO CART</button>

            <p className="productdisplay-right-category">
              <span>Category :</span> Women, T-Shirt, Crop Top
            </p>
            <p className="productdisplay-right-category">
              <span>Tags :</span> Modern, Latest
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductDisplay;
