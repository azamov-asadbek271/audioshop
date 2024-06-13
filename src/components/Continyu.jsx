import CartItemList from "./CartItemList";
import { useSelector } from "react-redux";
import { formatPrice } from "../uitls";
function Continyu() {
  const { cartItem, tax, cartTotal, shipping, orderTotal } = useSelector(
    (state) => state.cartCounter
  );
  return (
    <div>
      <div className="bg-slate-200 w-96   p-5 rounded-xl ">
        <h2> SUMMARY</h2>
        {cartItem.map((item) => {
          return <CartItemList key={item.cartID} item={item} />;
        })}
        <div className="flex flex-col gap-4 mt-10">
          <div className="flex justify-between">
            <h2>TOTAL</h2>
            <p>{formatPrice(cartTotal)}</p>
          </div>
          <div className="flex justify-between">
            <h2>SHIPPING</h2>
            <p>{formatPrice(shipping)}</p>
          </div>
          <div className="flex justify-between">
            <h2>VAT (INCLUDED)</h2>
            <p>{formatPrice(tax)}</p>
          </div>
          <div className="flex justify-between">
            <h2>GRAND TOTAL</h2>
            <p>{formatPrice(orderTotal)}</p>
          </div>
          <button className="btn rounded-none bg-[#D87D4A] text-white border-none  sub-title-sty w-full mt-5 ">
            See Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default Continyu