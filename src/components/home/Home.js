import React from 'react';
import Product from '../products/Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428694220_.jp"
                />

                <div className="home__row">
                    <Product
                        id="490098550"
                        title="Then lean startup"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_5Y400_.jpg"
                        rating={5}
                    />
                    <Product
                        id="49038551"
                        title="Sony WH1000XM3 Noise Cancelling Headphones, Wireless Bluetooth Over the Ear Headset – Black (2018 Version)"
                        price={348.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/519EahgX90L._AC_UL320_.jpg"
                    />
                    <Product
                        id="49038552"
                        title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
                        price={64.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/81L9+4dTIgL._AC_UY218_.jpg"
                    />
                    <Product
                        id="49038553"
                        title="Sony X950H 49 Inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model"
                        price={866.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61t1BmzC5WL._AC_UY218_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="49038550"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445931"
                        title="Oster Toaster Oven | Digital Convection Oven, Large 6-Slice Capacity, Black/Polished Stainless"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2s"
                    />

                    <Product
                        id="23445932"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={91.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/81NB5wO1HnL._AC_UL320_.jpg"
                    />

                    <Product
                        id="23445933"
                        title="Mueller Premium 1500W Electric Kettle with SpeedBoil Tech, 1.8 Liter Cordless with LED Light, Borosilicate Glass,..."
                        price={32,461.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81UXdTyVXfL._AC_UL320_.jpg"
                    />
                    
                </div>
                <div className="home__row">
                    <Product
                        id="49038550"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor, Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                    <Product
                        id="49038551"
                        title="Samsonite Xenon 3.0 Slim Backpack Laptop, Black, Medium..."
                        price={99.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/81z0S-eGXAL._AC_UY218_.jpg"
                    />
                    <Product
                        id="49038552"
                        title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD,..."
                        price={364.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"
                    />
                    <Product
                        id="49038553"
                        title="Acer XFA240 bmjdpr 24 Gaming G-SYNC Compatible Monitor 1920 x 1080, 144hz Refresh Rate, 1ms Response Time with Height, Pivot, Swivel & Tilt, Black"
                        price={199.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/81NL4nYr15L._AC_UY218_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
