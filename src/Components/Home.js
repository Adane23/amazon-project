import React from 'react';
import "../Css/Home.css"
import Product from './Product';
import banner from "../images/banner.jpg";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg"; 
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";
import playstation from "../images/playstation.jpg";

function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                <img 
                    className='home_image' src={banner} alt="banner"
                />

                <div className="home_row" >
                    <Product 
                        id="12321341"
                        title=" Microsoft
                        Surface Laptop Studio 2 (2023) - 14.4 inches Touchscreen - Intel Core i7, 32GB RAM, NVIDIA RTX 2000 Ada, 1TB SSD, Windows 11, Platinum Color "
                        price={3599.99}
                        rating={4}
                        image={image1}  
                    />
                    <Product 
                        id="49538092"
                        title="SAMSUNG 85-Inch Class Neo QLED 8K QN900C Series Mini LED Quantum HDR Smart TV with Infinity Screen, Dolby Atmos, Object Tracking Sound Pro, Alexa Built-in (QN85QN900C, 2023 Model),Titan Black"
                        price={6297.99}
                        rating={3}
                        image={image2}
                    />
                </div>

                <div className="home_row" >
                    <Product 
                        id="4903853"
                        title="Apple AirPods (2nd Generation) Wireless Ear Buds, Bluetooth Headphones with Lightning Charging Case Included, Over 24 Hours of Battery Life, Effortless Setup for iPhone"
                        price={99.00}
                        rating={5}
                        image={image3}
                    />
                    <Product 
                        id="23445934"
                        title="Citizen Men's Classic Calendrier Eco-Drive Watch, 12/24 Hour Time, 3-Hand Day and Date, Anti-Reflective Mineral Crystal, Luminous Hands"
                        price={369.16}
                        rating={4}
                        image={image4}
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                    
                </div>
                <div className="home_row" >
                    <Product 
                        id="3254354345"
                        title="The Herbal Medicine & Natural Remedies Encyclopedia: The Comprehensive Guide on How to Naturally Improve Your Health with Powerful Healing Herbs and 300+ Simple and Effective Plant Remedies Paperback"
                        price={23.37}
                        rating={4}
                        image={image5}
                    />

                    <Product 
                        id="3254354346"
                        title="Rosemary Gladstar's Medicinal Herbs: A Beginner's Guide: 33 Healing Herbs to Know, Grow, and Use Paperback – Illustrated"
                        price={11.49}
                        rating={5}
                        image={image6}
                    />

                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />
                </div>
                <div className="home_row" >
                    <Product 
                        id="3254354347"
                        title="The Herbal Apothecary: 100 Medicinal Herbs and How to Use Them Paperback – Illustrated, December 30, 2015"
                        price={19.39}
                        rating={5}
                        image={image7}
                    />

                    <Product 
                        id="3254354348"
                        title="Healing Herbal Teas: Learn to Blend 101 Specially Formulated Teas for Stress Management, Common Ailments, Seasonal Health, and Immune Support Paperback – December 27, 2016"
                        price={23.21}
                        rating={4}
                        image={image8}
                    />

                    <Product
                        id="4903850"
                        title="Sony PS5 Playstation 5 Console Disc Version - Wireless Controller, x86-64-AMD Ryzen Zen 8 Cores CPU, 16GB GDDR6 Memory, 825GB SSD Storage"
                        price={199.99}
                        rating={3}
                        image={playstation}
                    />
                </div>
                <div className="home_row" >
                    <Product 
                        id="3254354349"
                        title="20x50 Binoculars for Adults, high Powered Binoculars with Low Light Night Vision, Compact Waterproof Binoculars for Bird Watching Hunting Travel Football Games Stargazing with Carrying Case and Strap"
                        price={35.00}
                        rating={4}
                        image={image9}
                    />

                    <Product 
                        id="3254354310"
                        title="60x60 16000M Binoculars Telescope High Power Binoculars Night Vision Telescope for Outdoor Sightseeing"
                        price={575.27}
                        rating={5}
                        image={image10}
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                </div>
                <div className="home_row" >
                    <Product 
                        id="190829311"
                        title="Sony XR85Z9K 85 inches 8K BRAVIA XR HDR Mini LED Smart TV with a HT-A5000 5.1.2 Channel Dolby Atmos Soundbar with Built-in Subwoofers (2022)"
                        price={7626.00}
                        rating={3}
                        image={image11}
                    />
                    
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />

                    <Product
                        id="4903850"
                        title="Fitbit Charge 3 Fitness Activity Tracker, Graphite/Black, one Size (no fitbit Warranty Support), 0.06 Pound"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;