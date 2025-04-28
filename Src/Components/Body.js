import RestaurantCard, { withPromotedlabel } from './/RestaurantsCard';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import userContext from './Utils/UserContext';
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setsearchText] = useState('');
  const [filterdResturant, setfilterdResturant] = useState([]);

  //memoization we use to make our code more efficient if any function taking some time
  // to exicute we will store the output of the function in cache and user call same function with same
  // arguments instead running that function again it will just pick the value from cache and return it.
  // function calc(arr) {
  //   let result = 0;
  //   for (i = 0; i <= arr; i++) {
  //     result = result + i;
  //   }
  //   return result;
  // }
  // const memoization = (fun) => {
  //   let cache = {};
  //   return function (...args) {
  //     n = args[0];
  //     if (n in cache) {
  //       return cache[n];
  //     } else {
  //       let result = fun(n);
  //       cache[n] = result;
  //       return result;
  //     }
  //   };
  // };
  // let sum = function (a) {
  //   return function (b) {
  //     if (b) {
  //       return sum(a + b);
  //     } else {
  //       return a;
  //     }
  //   };
  // };
  // console.log(sum(1)(2)(3)(4)());

  // const memo = memoization(calc);
  // console.log(memo(6));
  // console.log(memo(5));

  const RestaurantCardPromoted = withPromotedlabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);
  fetchData = async () => {
    data = await fetch(
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
      <div className='search flex'>
        <div className='mx-4 p-4 flex items-center'>
          <input
            className='border border-solid m-4 p-2 rounded-lg'
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}></input>
          <button
            className='px-4 py-1 bg-green-100 m-4 rounded-md'
            onClick={() => {
              const newList = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setfilterdResturant(newList);
            }}>
            Search
          </button>
        </div>
        <div className='mx-4 p-4 flex items-center'>
          <button
            className='px-4 py-1 bg-gray-200 rounded-md'
            onClick={() => {
              const filterLogic = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.5
              );
              setListOfRestaurant(filterLogic);
            }}>
            Top Restaurants
          </button>
        </div>
        <div className='mx-4 p-4 flex items-center'>
          <label>User Name: </label>
          <input
            className='border border-black p-2 rounded-lg m-1'
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
