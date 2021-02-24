import React from 'react';
import { useStateValue } from '../../stateProvider/StateProvider';
import './CheckoutProduct.css'

function CheckoutProduct({ id, title, image, price, rating, hideButton}) {
    const [{ basket }, dispach] = useStateValue();

    const removeFromBasket = () => {
        //remove from basket
        dispach({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    return (
        <div className="checkoutProduct">
            <img
                className="checkoutProduct__image"
                src={image}
            />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>&#9733;</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
