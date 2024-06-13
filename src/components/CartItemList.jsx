import React from 'react'
import { formatPrice } from '../uitls';

function CartItemList({item}) {
    const {image,name,price,amount} = item
    const {desktop} = image
    const dollorPrice = formatPrice(price)
    
  return (
    <div className="mt-5 flex items-center gap-4">
      <img src={desktop} alt="" className="w-20 rounded" />
      <div className="flex flex-col gap-3 mr-auto">
        <h2>{name}</h2>
        <p>{dollorPrice}</p>
      </div>
      <h1 className="p-2 bg-slate-500 text-white rounded">{amount}</h1>
     
    </div>
  );
}

export default CartItemList