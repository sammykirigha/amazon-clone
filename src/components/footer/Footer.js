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
                        <li> <Link to="/"> Help Center</Link></li>
                         <li><Link to="/">Contact us</Link></li>
                        <li><Link to="/">How to shop on Amazon</Link></li>
                        <li><Link to="/">Shipping and delivery</Link></li>
                        <li><Link to="/">Corporate and Bulk Purchase</Link></li>
                         <li><Link to="/">COVID-19 Health Kit</Link></li>
                        <li><Link to="/">Advertise with Amazon</Link></li>
                        <li><Link to="/">Amazon Logistics Services</Link></li>
                        <li><Link to="/">Report a Product</Link></li>
                    </ul>
                </div>
                {/*footer about amazon*/}
                <div className="footer__about">
                    <h2>ABOUT AMAZON</h2>
                    <ul>
                        <li><Link>About us</Link></li>
                        <li><Link>Amazon Careers</Link></li>
                        <li><Link>Amazon Express</Link></li>
                        <li><Link>Terms and Conditions</Link></li>
                        <li><Link>Privacy Policy</Link></li>        
                        </ul>
                    </div>
                {/*footer make money with amazon*/}
                <div className="footer__makeMoney">
                    <h2>MAKE MONEY WITH AMAZON</h2>
                    <ul>
                        <li><Link>Sell on Amazon</Link></li>
                        <li><Link>Become a Sales Consultant</Link></li>
                        <li><Link>Become a Logistics Service Partner</Link></li>
                        <li><Link>Amazon City Partner Program</Link></li>
                        <li><Link>Order & Pick Up Point Application</Link></li>
                        </ul>
                </div>
                {/*footer international*/}
                <div className="footer__international">
                    <h2>AMAZON INTERNATIONAL</h2>
                    <div className="footer__container">
                        <ul className="footer__left">
                            <li><Link>London</Link></li>
                            <li><Link>America</Link></li>
                            <li><Link>China</Link></li>
                            <li><Link>Germany</Link></li>
                            <li><Link>Africa</Link></li>

                        </ul>

                        <ul className="footer__right">
                            <li><Link>Mexico</Link></li>
                            <li><Link>Brazil</Link></li>
                            <li><Link>Kenya</Link></li>
                            <li><Link>South Africa</Link></li>
                            <li><Link>Algeria</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
