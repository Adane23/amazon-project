import React from 'react';
import "../Css/CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating, hideButton}) {

    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };
  return (
    <div className='checkoutProduct'>
        {/* <img className='checkoutProduct_image' src="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"/> */}

        <img className='checkoutProduct_image' src={image}/>

        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>
            <p className='checkoutProduct_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct_rating'>
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p key={i}>⭐</p>
                    )

                )}
            </div>
            {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>
            )}{' '}
            
        </div>
    </div>
    )
}

export default CheckoutProduct;