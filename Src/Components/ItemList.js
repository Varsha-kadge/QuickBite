import { useDispatch, useSelector } from 'react-redux';
import { IMG_URL } from './Utils/Constants';
import { addItem, removeItem } from './Utils/cartSlice'; // adjust the path
const ItemList = ({ data }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const handleonAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleonRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div>
      {data?.map((item, index) => (
        <div
          data-testid='foodItems'
          key={item.card.info.id}
          className='my-5 border-b-2 border-gray-300 flex justify-between'>
          <div className='w-8/12'>
            <div className='text-left'>
              {item.card.info.isVeg === 1 ? (
                <span className='text-green-600 font-bold'>VEG</span>
              ) : (
                <span className='text-red-600 font-bold'>NON-VEG</span>
              )}
            </div>
            <div className='font-bold text-lg text-left my-2'>
              {item.card.info.name}
            </div>
            <div className='font-bold text-lg text-left my-2'>
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </div>
            {item.card.info.ratings.aggregatedRating.rating && (
              <div className='font-bold text-md text-green-600 text-left mb-2'>
                ⭐ {item.card.info.ratings.aggregatedRating.rating}
              </div>
            )}
            <div className='text-md text-left my-2 mb-10'>
              {item.card.info.description}
            </div>
          </div>
          <div className='w-4/12 p-4 relative'>
            {' '}
            {/* <-- add relative here */}
            <img
              className='w-full rounded-xl w-full h-[170px] object-cover'
              src={IMG_URL + item.card.info.imageId}
              alt=''
            />
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
              {cartItems?.[index]?.card.info.id == item.card.info.id ? (
                <div className='flex items-center gap-2 bg-white border-2 border-gray-300 rounded-xl px-3 py-2 shadow-lg'>
                  <button
                    onClick={() => handleonRemoveItem(item)}
                    className='text-red-500 font-bold text-xl'>
                    -
                  </button>
                  <span className='font-semibold text-gray-700'>
                    {cartItems[index].quantity}
                  </span>
                  <button
                    onClick={() => handleonAddItem(item)}
                    className='text-green-600 font-bold text-xl'>
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleonAddItem(item)}
                  className='text-green-600 cursor-pointer rounded-xl bg-white font-bold border-2 shadow-lg border-gray-300 p-2 w-30'>
                  ADD
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
