import React, { createContext, useState } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const addTocart=(itemId)=>{
        setCartItems((prev))
    }
    const getDefaultCart = () => {
        let cart = {};
        for (let index = 0; index < all_product.length+1; index++) {
            cart[index] = 0;
        }
        return cart;
    };

    const [cartItems, setCartItems] = useState(getDefaultCart);

    const ContextValue = { all_product, cartItems };

    console.log(cartItems);

    return (
        <ShopContext.Provider value={ContextValue}>
        
            {props.children}
        </ShopContext.Provider>
    );
};
// shop context provider 

export default ShopContextProvider;
