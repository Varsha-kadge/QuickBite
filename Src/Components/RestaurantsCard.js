import { LOGo_URL } from './Utils/Constants';
import { useContext } from 'react';
import userContext from './Utils/UserContext';

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(userContext);
  return (
    <div
      data-testid='resCard'
      className='m-4 p-4 w-[260px] bg-white rounded-2xl shadow-md flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
      {/* Image */}
      <img
        className='rounded-xl w-full h-[170px] object-cover mb-3'
        src={LOGo_URL + resData.info.cloudinaryImageId}
        alt={resData.info.name}
      />

      {/* Restaurant Info */}
      <div className='space-y-1'>
        <h3 className='font-bold text-lg text-gray-800 truncate'>
          {resData.info.name}
        </h3>
        <h4 className='text-gray-600 text-sm truncate'>
          {resData.info.cuisines?.join(', ')}
        </h4>

        {/* Rating + Cost */}
        <div className='flex justify-between items-center pt-2'>
          <span className='text-green-600 font-semibold text-sm'>
            ⭐ {resData.info.avgRating}
          </span>
          <span className='text-gray-700 text-sm'>
            {resData.info.costForTwo}
          </span>
        </div>
      </div>
    </div>
  );
};

export const withPromotedlabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        {/* <label className='absolute m-2 px-2 bg-black text-white rounded-lg'>
          Promoted
        </label> */}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
