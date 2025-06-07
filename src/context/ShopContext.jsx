import React, { createContext } from 'react'
import all_product from '../components/Assets/all_product'

export let ShopContext =createContext(null);

  const ShopContextProvider = ({ children }) => {

    let contextData ={all_product}
        return (
            <ShopContext.Provider value={contextData}>
                {children}
            </ShopContext.Provider>
        )
    }


export default ShopContextProvider