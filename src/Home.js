import React from 'react'
import './Home.css';

import Product from './Product'

const Home = () => {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <img src="https://linkusuponline.com/wp-content/uploads/2019/08/e-commerce-banner-1024x341.jpg" alt="" className="home__image" />

                <div className="home__row">
                  <Product />
                  <Product />
                </div>
                <div className="home__row">
                <Product />
                <Product />
                <Product />
                <Product />
                </div>
                <div className="homr_row"></div>
            </div>
        </div>
    </div>
  )
}

export default Home