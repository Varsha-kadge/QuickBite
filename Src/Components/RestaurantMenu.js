import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { useEffect, useState } from 'react';
import useRestuarantMenu from './Utils/useRestaurantMenu';
import useOnlineStatus from './Utils/useOnlineStatus';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestuarantMenu(resId);
  const [showIndex, setshowIndex] = useState(1);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ? resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    : resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  return (
    <div className='Menu text-center'>
      <h1 className='font-bold my-10 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>
        {cuisines.join(', ')}
        {costForTwoMessage}
      </p>
      {/* categories accordios */}
      {itemCards.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={index}
          showItems={index == showIndex ? true : false}
          setshowIndex={() => setshowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
