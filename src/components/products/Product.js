import React from 'react'
import { useStateValue } from '../../stateProvider/StateProvider';
import './Products.css';

function Product({id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue()
    console.log("this is the basket: ", basket);
    
    const addToBasket = () => {
        //dispatch the item into tha data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })

    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{id, title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>&#9733;</p>
                    ))}
                </div>
            </div>
            <img
                src={image}
            />
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product
