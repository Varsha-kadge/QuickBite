import { LOGo_URL } from './Utils/Constants';
import { useContext } from 'react';
import userContext from './Utils/UserContext';

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(userContext);
  return (
    <div className='m-2 p-2 w-[250px] bg-gray-200 rounded-lg'>
      <img
        className='rounded-lg'
        src={LOGo_URL + resData.info.cloudinaryImageId}></img>
      <h3 className='font-bold text-lg py-2'>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(', ')}</h4>
      <h4 className='bg-green-500 px-1 w-15'>{resData.info.avgRating} *</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

export const withPromotedlabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className='absolute m-2 px-2 bg-black text-white rounded-lg'>
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
