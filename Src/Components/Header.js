import { CDN_URL } from './Utils/Constants';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import userContext from './Utils/UserContext';
import userContext from './Utils/UserContext';
const Header = () => {
  const [btnName, setbtnName] = useState('Login');
  const { loggedInUser } = useContext(userContext);

  // if no dependency array it is called every render
  // if empty dependency array it is called only at initial rendering
  //if dependency array is [btnName] everyTime btnName is updated useEfect is called
  useEffect(() => {}, [btnName]);
  return (
    <div className='flex justify-between bg-blue-50 shadow-lg my-2 sm:bg-yellow-50 lg:bg-blue-50'>
      <div className='logo-container'>
        <img className='w-36' src={CDN_URL}></img>
      </div>
      <div className='flex items-center'>
        <ul className='flex p-4 m-4'>
          <li className='px-4'>
            <Link to={'/'}>Home</Link>
          </li>
          <li className='px-4'>
            <Link to={'/about'}>About US</Link>
          </li>
          <li className='px-4'>
            <Link to={'/contact'}>Contact US</Link>
          </li>
          <li className='px-4'>
            <Link to={'/grocery'}>Grocery</Link>
          </li>
          <li className='px-4'>Cart</li>
          <button
            className='bg-blue-700 px-4 py-1 mb-1 text-white rounded-md'
            onClick={() =>
              btnName == 'Login' ? setbtnName('logout') : setbtnName('Login')
            }>
            {btnName}
          </button>
          <li className='p-2 font-bold'>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
