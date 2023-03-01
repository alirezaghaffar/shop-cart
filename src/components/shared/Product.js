import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//functions
import { shorten, isInCart, quantityCount } from '../../helpers/functions';

//context
import { CartContext } from "../../context/CartContextProvider";

//Icons
import trashIcon from "../../assets/icons/trash.svg"

const Product = ({ ProductData }) => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <div>
            <img src={ProductData.image} alt="product" style={{ width: "200px" }} />
            <h3>{shorten(ProductData.title)}</h3>
            <p>{ProductData.price}</p>
            <div>
                <Link to={`/products/${ProductData.id}`}>details</Link>
                <div>
                    {quantityCount(state, ProductData.id) > 1 && <button onClick={() => dispatch({ type: "DECREASE", payload: ProductData })}>-</button>}
                    {quantityCount(state, ProductData.id) === 1 && <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: ProductData })}><img src={trashIcon} alt="trash" style={{width: "20px"}} /></button>}

                    {
                        isInCart(state, ProductData.id) ?
                        <button onClick={() => dispatch({ type: "INCREASE", payload: ProductData })}>+</button> :
                        <button onClick={() => dispatch({ type: "ADD_ITEM", payload: ProductData })}>Add To Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;
