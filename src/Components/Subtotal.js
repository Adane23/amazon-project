import React from 'react';
import "../Css/Subtotal.css";
import CurrencyFormat from'react-currency-format';
import { useStateValue } from './StateProvider';
import { useNavigate } from "react-router-dom";

function Subtotal() {

    const [{basket}, dispatch] = useStateValue();
    const navigate = useNavigate();
    
    const getBasketTotal = (basket) => {
        return basket?.reduce((amount, item) => item.price + amount, 0);
    }
    
    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </div>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            
            />

            <button onClick={(e) => navigate('/payment')}>Proceed to Checkout</button>

        </div>
    )
}

export default Subtotal;