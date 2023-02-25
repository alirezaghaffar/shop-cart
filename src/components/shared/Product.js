import React from 'react';
import { Link } from 'react-router-dom';

//functions
import { shorten } from '../../helpers/functions';

const Product = ({ ProductData }) => {
    return (
        <div>
            <img src={ProductData.image} alt="product" style={{ width: "200px" }} />
            <h3>{shorten(ProductData.title)}</h3>
            <p>{ProductData.price}</p>
            <div>
                <Link to={`/products/${ProductData.id}`}>details</Link>
                <div>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;