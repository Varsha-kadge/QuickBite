import { clearCart } from './Utils/cartSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className='text-center mx-10 px-10 py-5'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <button
        onClick={handleClearCart}
        className='m-2 p-2 bg-black text-white rounded-lg'>
        Clear Cart
      </button>
      <div className='w-8/12 m-auto p-10'>
        {cartItems.length === 0 && <h1>Your Cart is Empty</h1>}
        <ItemList data={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
