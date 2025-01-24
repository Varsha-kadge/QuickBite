import RestaurantCard from './/RestaurantsCard';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  fetchData = async () => {
    data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (!listOfRestaurant) {
    return <Shimmer />;
  }
  return (
    <div className='body'>
      <div className='search'>
        <button
          className='filterBtn'
          onClick={() => {
            const filterLogic = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurant(filterLogic);
          }}>
          Top Restaurants
        </button>
      </div>
      <div className='res-container'>
        {listOfRestaurant.map((restoObj) => (
          <RestaurantCard key={restoObj.info.id} resData={restoObj} />
        ))}
      </div>
    </div>
  );
};
export default Body;
