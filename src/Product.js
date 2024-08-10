import React from 'react'
import './Product.css';

const Product = () => {
  return (
    <div>
        <div className="product">
            <div className="product__info">
                <p>Ecommerce Product Photography Services, For E Commerce Website</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>30</strong>
                </p>
                <div className="product__rating">⭐⭐⭐</div>
            </div>

            <img src="https://5.imimg.com/data5/ANDROID/Default/2023/7/326598386/TM/JD/NK/189033354/product-jpeg-1000x1000.jpg" alt="product-image" />
            <button>Add to Basket</button>
        </div>
    </div>
  )
}

export default Product