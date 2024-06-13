import React from 'react';
import './Populer.css';
import data_product from '../../Assetes/data';
import Rating from 'react-rating';

import Item from '../Item/Item';

function Populer() {
  return (
    <div className='populer'>
      <h1>POPULER IN MEN</h1>
      <hr />
      <div className="populer-item">
        {data_product.map((item, i) => (
          <div key={i} className="product-item">
            <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            {/* <Rating
              initialRating={item.rating} // Assuming each product has a 'rating' property
              emptySymbol={<span className="icon-star-empty">&#9734;</span>}
              fullSymbol={<span className="icon-star-full">&#9733;</span>}
              onChange={(newRating) => {
                // Handle rating change if needed
                console.log(`Product ${item.id} rating changed to ${newRating}`);
              }}
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Populer;
