import RestaurantCard, { withPromotedlabel } from './/RestaurantsCard';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import userContext from './Utils/UserContext';
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setsearchText] = useState('');
  const [filterdResturant, setfilterdResturant] = useState([]);

  const RestaurantCardPromoted = withPromotedlabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);
  fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4517127&lng=77.0516491&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterdResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const { setUserName, loggedInUser } = useContext(userContext);
  if (!listOfRestaurant) {
    return <Shimmer />;
  }
  return (
    <div className='body'>
      <div className='search flex flex-wrap gap-4 p-4 bg-white shadow-md rounded-xl items-center justify-between'>
        {/* Search Input + Button */}
        <div className='flex items-center gap-2'>
          <input
            className='border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400'
            type='text'
            value={searchText}
            data-testid='searchInput'
            placeholder='Search restaurants...'
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className='bg-green-500 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-200'
            onClick={() => {
              const newList = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setfilterdResturant(newList);
            }}>
            Search
          </button>
        </div>

        {/* Top Restaurants Button */}
        <div className='flex items-center'>
          <button
            className='bg-gray-800 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-all duration-200'
            onClick={() => {
              const filterLogic = listOfRestaurant.filter(
                (res) => Number(res.info.avgRating) >= 4.5
              );
              setfilterdResturant(filterLogic);
            }}>
            Top Restaurants
          </button>
        </div>

        {/* User Input */}
        <div className='flex items-center gap-2'>
          <label className='font-medium text-gray-700'>User Name:</label>
          <input
            className='border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400'
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className='flex flex-wrap'>
        {filterdResturant.map((restoObj) => (
          <Link to={'./restaurants/' + restoObj.info.id}>
            {restoObj.info.id ? (
              <RestaurantCardPromoted
                key={restoObj.info.isNewlyOnboarded}
                resData={restoObj}
              />
            ) : (
              <RestaurantCard key={restoObj.info.id} resData={restoObj} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
