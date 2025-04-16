import { useState } from 'react';

const user = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className='user-card'>
      <h2>Name:{name}</h2>
      <h2>Count:{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Count Increase
      </button>
      <h3>Pune</h3>
      <h3>varshakadgev4@gmail.com</h3>
    </div>
  );
};
export default user;
