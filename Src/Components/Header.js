import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import userContext from './Utils/UserContext';
import { useSelector } from 'react-redux';
import CDN_URL from './assets/NewLogo.png';
const Header = () => {
  const [btnName, setbtnName] = useState('Login');
  const { loggedInUser } = useContext(userContext);

  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  // if no dependency array it is called every render
  // if empty dependency array it is called only at initial rendering
  //if dependency array is [btnName] everyTime btnName is updated useEfect is called
  useEffect(() => {}, [btnName]);
  return (
    <div className='flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-100 via-yellow-50 to-blue-100 shadow-md sticky top-0 z-50'>
      {/* Logo */}
      <div className='flex items-center gap-2'>
        <img
          src={CDN_URL}
          alt='QuickBite Logo'
          className='w-16 h-16 object-contain rounded-md'
        />
        <h1 className='text-xl font-bold text-blue-700 hidden sm:block'>
          QuickBite
        </h1>
      </div>

      {/* Navigation */}
      <ul className='flex flex-wrap items-center gap-4 text-gray-700 font-semibold text-sm sm:text-base'>
        <li className='hover:text-green-600 transition'>
          <Link to='/'>Home</Link>
        </li>
        <li className='hover:text-green-600 transition'>
          <Link to='/about'>About Us</Link>
        </li>
        <li className='hover:text-green-600 transition'>
          <Link to='/contact'>Contact</Link>
        </li>
        <li className='hover:text-green-600 transition'>
          <Link to='/grocery'>Grocery</Link>
        </li>
        <li className='hover:text-green-600 transition'>
          <Link to='/cart'>Cart 🛒 ({cartItems.length})</Link>
        </li>
        <li className='text-blue-800 hidden sm:block'>{loggedInUser}</li>

        {/* Login/Logout Button */}
        <li>
          <Link to='/Login'>
            <button className='bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 transition'>
              Logout
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
