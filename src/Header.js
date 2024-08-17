import React from 'react'
import './Header.css'

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

import { Link } from 'react-router-dom';
import { useStateValue } from './context/StateProvider';


const Header = () => {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/" style={{textDecoration: "none"}}>
        <div className="header__logo">
        <StorefrontIcon className='header__logoImage' fontSize='large'/>
        <h2 className="header__logoTitle">eSHOP</h2>
      </div>
      </Link>

     <div className="header__search">
      <input type="text" name="" id="" className='header__searchInput' />
      <SearchIcon className='header__searchIcon'/>
     </div>

     <div className="header__nav">
      <div className="nav__item">
       <Link to="/login" style={{textDecoration: "none"}}>
          <span className="nav__itemLineOne">Hellow Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
       </Link>
      </div>
      <div className="nav__item">
        <span className="nav__itemLineOne">Your</span>
        <span className="nav__itemLineTwo">Shop In</span>
      </div>

      <Link to="/checkout" style={{textDecoration: "none"}}>
      <div className="nav__itemBasket">
        <ShoppingBasketIcon />
        <span className="nav__itemLineTwo navbasketCount">{basket.length}</span>
      </div>
      </Link>
      
     </div>
    </div>
  )
}

export default Header