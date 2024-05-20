import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCar, removeItem } from '../feature/counter/CounterSlice';
import CartItems from './CartItems';
import CartTotalsPrice from './CartTotalsPrice';

function Modal() {
    const { numItemsInCart } = useSelector((state) => state.cartCounter);
    const dispatch = useDispatch()
   
    const removeData =() => {
        dispatch(clearCar())
    }
    
    if (numItemsInCart === 0) {
      return (
        <div
          tabIndex={0}
          className="menu menu-lg dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-96 "
        >
          <h2 className='capitalize text-center'> no cart</h2>
        </div>
      );
    }
  return (
    <div
      tabIndex={0}
      className="menu menu-lg dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-96"
    >
      <div className="flex justify-between">
        <h4 className="font-bold mb-5">Cart</h4>
        <button onClick={removeData}>Remove</button>
      </div>
      <hr />
      <div>
        <CartItems />
        <CartTotalsPrice />
      </div>
    </div>
  );
}

export default Modal