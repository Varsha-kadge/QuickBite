import { LOGo_URL } from './Utils/Constants';

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className='res-card'>
      <img
        className='res-logo'
        src={LOGo_URL + resData.info.cloudinaryImageId}></img>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(', ')}</h4>
      <h4>{resData.info.avgRating} stars</h4>
      <h4>{resData.info.costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
