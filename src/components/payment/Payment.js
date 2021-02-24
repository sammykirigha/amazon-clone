import React, { useEffect, useState} from 'react'
import './Payment.css';
import axios from '../../axios';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import { useStateValue } from '../../stateProvider/StateProvider'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getProductsTotal } from '../../reducer/reducer'


function Payment() {
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();
    
    const [{ basket, user }, dispach] = useStateValue();
    
    const [processing, setProcessing] = useState("");
    const [succeeded, setSecceeded] = useState(true);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true)

    

    useEffect(() => {
        //generate the special stripe secret
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe expects the total in a currencies submits
                url: `/payments/create?total=${getProductsTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('secrete is >>>>>>>>>>>....', clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        //client secret based on change of the basket

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation
            setSecceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders')
        })

    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    checkout (<Link to="/checkout">{basket?.length} itmes</Link>)
                </h1>
                {/*payment section delivery address*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React lane</p>
                        <p>kenya nairobi</p>
                    </div>
                </div>
                {/*payment section review items*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>

                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/*payment section payment methos*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__details">
                        {/*stripe magic will go*/}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat

                                    renderText={(value) =>(

                                        <h3>Order Total: {value}</h3>
                                    )}
                                    dicimalScale={2}
                                    value={getProductsTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}

                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment
