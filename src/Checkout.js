import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from './context/StateProvider'

function Checkout() {

    const [{basket}, dispatch] =  useStateValue();
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/2024/SNS/Page/Banners-PC_1500x300_coupons.jpg" width="100%" alt="check-out-banner" className="checkout__add" />
            <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>
               {
                    basket.map((eachItem)=> (
                        <CheckoutProduct 
                        id={eachItem.id}
                        title={eachItem.title}
                        image={eachItem.image}
                        price={eachItem.price}
                        rating={eachItem.rating}
                        />
                    ))
               }
            </div>
           
        </div>
        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout
