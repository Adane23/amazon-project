import React from 'react';
import "../Css/Product.css";
import { useStateValue } from './StateProvider';

function Product(props) {
    // Destructure the props for easier access
    const { id, title, price, rating, image} = props;
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
            }
        });
    }
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className='product_rating'>
                    {Array(rating)
                        .fill()
                        .map(() => (
                            <p>⭐</p>
                        ))            
                    }
                </div>

            </div>

            <img 
                src={image} alt=''
            />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product