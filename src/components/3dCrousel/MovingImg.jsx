import React from 'react';
import './MovingImg.css';
import new_collection from '../Assets/new_collections.js';

const MovingImg = () => {
    return (<>
    <div className="topic">
        <h2>Trending Collections</h2>
        <hr />
    </div>
        <div className='banner'>
            <div className="slider" style={{ '--quantity': new_collection.length }}>
                {new_collection.map((product, index) => (
                    <div className="item" key={product.id} style={{ '--position': index + 1 }}>
                        <img className="item-img" src={product.image} alt={product.name} />
                    </div>
                ))}

            </div>
        </div>
    </>
    );
};

export default MovingImg;
