import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom'; // ✅ Add this line

const Item = (props) => {
  return (
    <div className='item'>
     <Link to={`/product/${props.id}`}> <img
        src={props.image}
        alt={props.name}
        className={props.id === 11 ? "image-pad" : ""}
      /></Link>
      <p>{props.name}</p>
      <div className='item-price'>
        <div className='item-price-new'>
          ₹{props.new_price}
        </div>
        <div className='item-price-old'>
          ₹{props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
