import React, { useContext } from 'react'
import "../CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className="shopcategory-banner" src={props.banner} alt="" srcset="" />
      <div className="shopcategory-indexSort">
        <p>
          <span> 
            showing 1-12
          </span> out of 36 product
        </p>
        <div className="shopcategory-sort"> 
          Sort by <img src={dropdown_icon} alt="" height={20} />
        </div>
      </div>
      <div className="shopcategory-products">
       {all_product.map((item) => {
  if (props.category === item.category) {
    return (
      <Item
        key={item.id}
        id={item.id}
        name={item.name}
        // add other props like image, price, etc.
        image={item.image}
        new_price={item.new_price}
        old_price={item.old_price}
      />
    );
  }
  return null; // if category doesn't match
})}

        
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>

      
    </div>
  )
}

export default ShopCategory
