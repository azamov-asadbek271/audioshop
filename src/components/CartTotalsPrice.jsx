import { useSelector } from "react-redux"
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
    </div>
  );
}

export default CartTotalsPrice