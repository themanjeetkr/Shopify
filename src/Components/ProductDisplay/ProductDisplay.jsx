import React from 'react';
import './ProductDisplay.css';
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from  '../../assets/star_dull_icon.png'

const ProductDisplay = ({ product }) => {
    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productlist-img-list'>
                    <img src={product.image} alt='' height={200} />
                    <img src={product.image} alt='' height={200} />
                    <img src={product.image} alt='' height={200} />
                    <img src={product.image} alt='' height={200} />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" height={500} />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" height={20} />
                    <img src={star_icon} alt="" height={20} />
                    <img src={star_icon} alt="" height={20} />
                    <img src={star_icon} alt="" height={20} />
                    <img src={star_dull_icon} alt="" height={20} />
                    <p>(130)</p>

                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                     <div className="productdisplay-right-price-new">
                        ${product.new_price}
                     </div>
                     {/* description */}
                     <div className="productdisplay-right-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores cumque v
                        oluptas, laudantium, facere asper
                        natur fuga magni beatae vel fugiat quas rem odio eos.
                     </div>
                     <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        {/* size */}
                        <div className="productdisplay-right-size">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>

                        </div>
                     </div>
                     <button>Add to Cart</button>
                     <div className="productdisplay-right-category">
                        <span>Category:<span>Women, T-shirt, Crop Top</span></span>
                     </div>
                       <div className="productdisplay-right-category">
                        <span>Tags:<span>Modern, Latest,Trend Shorts</span></span>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
