import React from 'react'
import new_collection from '../Assets/new_collections'
import Item from '../item/Item'
import './NewCollection.css'
const NewCollection = () => {
    return (
        <div className='new-collection'>
           
            <h1>New Collections</h1>
            <hr   />

            <div className='collection'>

                
                {new_collection.map((item, i) => {
                    return <Item key={item.id}
                    id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}
                    
                    >

                    </Item>
                })}
            </div>

        </div>
    )
}

export default NewCollection