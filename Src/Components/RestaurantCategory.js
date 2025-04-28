import { useEffect, useState } from 'react';
import ItemList from './ItemList';
const RestaurantCategory = ({ data, showItems, setshowIndex }) => {
  const handleClick = () => {
    setshowIndex();
  };
  if (data.title && data.itemCards?.length > 0)
    return (
      <div>
        <div className='w-9/12 my-4 mx-auto bg-gray-50 shadow-lg p-4'>
          <div
            className='flex justify-between cursor-pointer'
            onClick={handleClick}>
            <span className='font-bold text-xl'>
              {data?.title} ({data?.itemCards?.length}) {showItems}
            </span>
            <span>⬇️</span>
          </div>
          {showItems && <ItemList data={data?.itemCards} />}
        </div>
      </div>
    );
  else if (data?.categories) {
    return (
      <div>
        <div className='w-9/12 my-4 mx-auto bg-gray-50 shadow-lg p-4'>
          <div className='font-bold text-xl text-left'>{data.title}</div>
          {data?.categories.map((category, index) => (
            <div key={index}>
              <div
                className='flex justify-between mt-4 cursor-pointer'
                onClick={handleClick}>
                <span className='font-bold text-lg'>
                  {category?.title} ({category?.itemCards?.length}){showItems}
                </span>
                <span>⬇️</span>
              </div>
              {showItems && <ItemList data={category?.itemCards} />}
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default RestaurantCategory;
