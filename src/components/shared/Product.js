import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//functions
import { shorten, isInCart, quantityCount } from '../../helpers/functions';

//context
import { CartContext } from "../../context/CartContextProvider";

//Icons
import trashIcon from "../../assets/icons/trash.svg";

// Style
import styles from "./Product.module.css";

const Product = ({ ProductData }) => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={ProductData.image} alt="product" />
            <h3>{shorten(ProductData.title)}</h3>
            <p>{`${ProductData.price} $`}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${ProductData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state, ProductData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({ type: "DECREASE", payload: ProductData })}>-</button>}
                    {quantityCount(state, ProductData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({ type: "REMOVE_ITEM", payload: ProductData })}><img src={trashIcon} alt="trash" style={{ width: "20px" }} /></button>}
                    {quantityCount(state, ProductData.id) > 0 && <span className={styles.counter}>{quantityCount(state, ProductData.id)}</span>}

                    {
                        isInCart(state, ProductData.id) ?
                            <button className={styles.smallButton} onClick={() => dispatch({ type: "INCREASE", payload: ProductData })}>+</button> :
                            <button onClick={() => dispatch({ type: "ADD_ITEM", payload: ProductData })}>Add To Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;
