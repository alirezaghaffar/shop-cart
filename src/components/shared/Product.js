import React from 'react';

//functions
import { shorten } from '../helpers/functions';

const Product = ({ ProductData }) => {
    return (
        <div>
            <img src={ProductData.image} alt="product picture" style={{ width: "200px" }} />
            <h3>{shorten(ProductData.title)}</h3>
            <p>{ProductData.price}</p>
            <div>
                <a href='button' >details</a>
                <div>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;