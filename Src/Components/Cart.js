import { clearCart } from './Utils/cartSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <div className='min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center'>
      {/* Clear Cart Button */}
      <div className='mb-6'>
        <button
          onClick={() => dispatch(clearCart())}
          className='bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-200'>
          🗑️ Clear Cart
        </button>
      </div>

      {/* Cart Content Box */}
      <div className='w-full max-w-3xl bg-white shadow-xl rounded-xl p-8 border border-gray-200'>
        {cartItems.length === 0 ? (
          <div className='text-center'>
            <h1 className='text-2xl font-semibold text-gray-600 mb-2'>
              🛒 Your cart is empty
            </h1>
            <p className='text-gray-500'>
              Looks like you've cleared your cart. Start adding delicious items
              again!
            </p>
          </div>
        ) : (
          <div>
            <h2 className='text-xl font-bold text-gray-800 mb-4 text-center'>
              🧾 Your Cart Items
            </h2>
            <ItemList data={cartItems} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
