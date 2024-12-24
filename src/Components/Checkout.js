import React from 'react';
import "../Css/Checkout.css";
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checout_ad' src='https://www.adidas.com/images/adidas/adidas-logo(1).png' alt='logo' 
                />
                <h1>Hello</h1>
                <h2 className='checkout_title'>Your Shopping Basket</h2>
                {basket.map((item) => (
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>

            <div className='checkout_right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;