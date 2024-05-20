import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { formatPrice } from "../uitls"


function CartTotalsPrice() {
    const {orderTotal} = useSelector((state) => state.cartCounter)
    const dollorPrice = formatPrice(orderTotal)
  return (
    <div className=" mt-5 p-2">
      <div className="flex justify-between">
        <h2 className="capitalize para-sty">total</h2>
        <h6 className="h6-sty">{dollorPrice}</h6>
      </div>
      <Link to="/checkout" className="btn rounded-none bg-[#D87D4A] text-white border-none mt-5 w-full">
        Checkout
      </Link>
    </div>
  );
}

export default CartTotalsPrice