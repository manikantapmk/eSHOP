import React from 'react'
import './Header.css'

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className="header">
        <div className="header__logo">
      <StorefrontIcon className='header__logoImage' fontSize='large'/>
      <h2 className="header__logoTitle">eSHOP</h2>
     </div>

     <div className="header__search">
      <input type="text" name="" id="" className='header__searchInput' />
      <SearchIcon className='header__searchIcon'/>
     </div>

     <div className="header__nav">
      <div className="nav__item">
        <span className="nav__itemLineOne">Hellow Guest</span>
        <span className="nav__itemLineTwo">Sign In</span>
      </div>
      <div className="nav__item">
        <span className="nav__itemLineOne">Your</span>
        <span className="nav__itemLineTwo">Shop In</span>
      </div>
      <div className="nav__itemBasket">
        {/* <ShoppingBasketIcon /> */}
        <span className="nav__itemLineTwo navbasketCount">0</span>
      </div>
     </div>
    </div>
  )
}

export default Header