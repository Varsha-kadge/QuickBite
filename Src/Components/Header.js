import { CDN_URL } from './Utils/Constants';
import { useState } from 'react';
const Header = () => {
  const [btnName, setbtnName] = useState('Login');
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={CDN_URL}></img>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
          <li>Cart</li>
          <button
            className='login'
            onClick={() =>
              btnName == 'Login' ? setbtnName('logout') : setbtnName('Login')
            }>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
