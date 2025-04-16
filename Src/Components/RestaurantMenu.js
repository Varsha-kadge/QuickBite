import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestuarantMenu from './Utils/useRestaurantMenu';
import useOnlineStatus from './Utils/useOnlineStatus';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestuarantMenu(resId);
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
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
    ?.cards[1].card.card.itemCards
    ? resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card
    : resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
  return (
    <div className='Menu'>
      <h1>{name}</h1>
      <p>
        {cuisines.join(', ')}
        {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{' '}
            {item.card.info.price
              ? item.card.info.price / 100
              : item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
