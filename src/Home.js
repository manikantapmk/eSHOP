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
                  <Product 
                  id="123566"
                  title= "Fostelo Women's Vegan Leather Catlin Handbags Shoulder Hobo Bag Ladies Purse (Large)"
                  price={11.96}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/71fZ4nCbKvL._SY695_.jpg"
                  />
                  <Product
                   id="1238766"
                   title= "Fostelo Women's Vegan Leather Style Diva Handbags Shoulder Hobo Bag Ladies Purse (Large)"
                   price={7.96}
                   rating={3}
                   image="https://m.media-amazon.com/images/I/61Fa7wW9FvL._SY695_.jpg"
                  />
                </div>
                <div className="home__row">
                <Product
                   id="1238766"
                   title= "Lavie Women's Mono Betula Tote Bag | Ladies Purse Handbag"
                   price={4.00}
                   rating={4}
                   image="https://m.media-amazon.com/images/I/61lsEf5o3EL._SX679_.jpg"
                  />
                <Product 
                 id="1238766"
                 title= "Lavie Women's Betula Medium Tote Bag | Ladies Purse Handbag"
                 price={9.12}
                 rating={2}
                 image="https://m.media-amazon.com/images/I/812Q7U89n7S._SY625_.jpg"
                />
                <Product 
                 id="1238766"
                 title= "Storite Women's Tote Bag with Leather Handles"
                 price={14.33}
                 rating={5}
                 image="https://m.media-amazon.com/images/I/81CMb5BZyVL._SY575_.jpg"
                />
                <Product
                 id="1238766"
                 title= "SXF SPEED X FASHION Women Handbag"
                 price={19.99}
                 rating={4}
                 image="https://m.media-amazon.com/images/I/81yijRLQUdL._SY625_.jpg"
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home