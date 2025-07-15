import React from 'react'
import './BredCrums.css'
import arrow_icon from '../../assets/arrow_icon.png'
// import Product from '../../Pages/Product'


const Bredcrums = ({product}) => {
    return (
        <div className='bredcrums'>
            Home <img src={arrow_icon} alt="" height={10} /> SHOP<img src={arrow_icon} alt=""  height={10}/>
            {product.category} <img src={arrow_icon} alt=""  height={10}/>{ product.name} <img src={arrow_icon} alt="" height={10} />

        </div>
    )
}

export default Bredcrums
