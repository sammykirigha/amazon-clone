import React, { useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    const [email, setEmail] = useState('');
    return (
        <div className="footer">
            <div className="footer__up">
                <div className="footer__image">
                    
                    <img
                        className="footer__logo"
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    />

                    <div className="footer__icon">
                        <ShoppingCartIcon />
                    </div>
                </div>
                {/*footer new users*/}
                <div className="footer__new">
                    <h2>NEW TO AMAZON?</h2>
                    <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                    <div className="footer__subscribe">
                        <input type="text" placeholder="Enter E-mail Address" value={email} onChange={e => setEmail(e.target.value)} />
                        <button>MALE</button>
                        <button>FEMALE</button>
                    </div>
                </div>
                {/*footer download app for free*/}
                <div className="footer__downloadApp">
                    <div className="footer__download">
                            <img
                                className="footer__downloadIcon"
                            src="https://www.freeiconspng.com/uploads/shopping-cart-icon-2.png"
                        />
                        <div className="footer__downloadSentiments">
                            <h2>DOWNLOAD AMAZON FREE APP</h2>
                            <p>Get access to exclusive offers!</p>
                        </div>
                    </div>
                    <div className="footer__appLinks" >
                        <img
                            className="footer__links"
                            src="https://miro.medium.com/max/8982/1*V9-OPWpauGEi-JMp05RC_A.png"
                        />
                        <img
                            className="footer__links"
                            src="https://cdn-images-1.medium.com/max/1600/1*EiZrcN_DIapbZaxutxbZRA.png"
                        />
                    </div>
                </div>
            </div>
            <div className="footer__down">
                {/*footer help you section*/}
                <div className="footer__helpYou">
                    <h2>LET US HELP YOU</h2>
                        <ul>
                        <Link to="/"><li>Help Center</li></Link>
                        <Link to="/"> <li>Contact us</li></Link>
                        <Link to="/"><li>How to shop on Amazon</li></Link>
                        <Link to="/"><li>Shipping and delivery</li></Link>
                        <Link to="/"><li>Corporate and Bulk Purchase</li></Link>
                        <Link to="/"> <li>COVID-19 Health Kit</li></Link>
                        <Link to="/"><li>Advertise with Amazon</li></Link>
                        <Link to="/"><li>Amazon Logistics Services</li></Link>
                        <Link to="/"><li>Report a Product</li></Link>
                    </ul>
                </div>
                {/*footer about amazon*/}
                <div className="footer__about">
                    <h2>ABOUT AMAZON</h2>
                    <ul>
                        <Link><li>About us</li></Link>
                        <Link><li>Amazon Careers</li></Link>
                        <Link><li>Amazon Express</li></Link>
                        <Link><li>Terms and Conditions</li></Link>
                        <Link><li>Privacy Policy</li></Link>        
                        </ul>
                    </div>
                {/*footer make money with amazon*/}
                <div className="footer__makeMoney">
                    <h2>MAKE MONEY WITH AMAZON</h2>
                    <ul>
                        <Link><li>Sell on Amazon</li></Link>
                        <Link><li>Become a Sales Consultant</li></Link>
                        <Link><li>Become a Logistics Service Partner</li></Link>
                        <Link><li>Amazon City Partner Program</li></Link>
                        <Link><li>Order & Pick Up Point Application</li></Link>
                        </ul>
                </div>
                {/*footer international*/}
                <div className="footer__international">
                    <h2>AMAZON INTERNATIONAL</h2>
                    <div className="footer__container">
                        <ul className="footer__left">
                            <Link><li>London</li></Link>
                            <Link><li>America</li></Link>
                            <Link><li>China</li></Link>
                            <Link><li>Germany</li></Link>
                            <Link><li>Africa</li></Link>

                        </ul>

                        <ul className="footer__right">
                            <Link><li>Mexico</li></Link>
                            <Link><li>Brazil</li></Link>
                            <Link><li>Kenya</li></Link>
                            <Link><li>South Africa</li></Link>
                            <Link><li>Algeria</li></Link>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
