import React from 'react'
import exclu from '../../assets/exclu.webp'
import './Offer.css'

const Offers = () => {
  return (
    <div>
      <div className='offers'>
        <div className='offer-left'>
            <h1>Exclusive</h1>
            <h1> Offers For  You </h1>
            <p>ONLY ON BEST SELLER PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={exclu} alt="" srcset="" />
        </div>
      </div>
    </div>
  )
}

export default Offers
