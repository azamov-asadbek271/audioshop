import { useSelector } from "react-redux"
import CartItemList from "./CartItemList"

function CartItems() {
    const {cartItem} = useSelector((state) => state.cartCounter)
    
  return (
    <div>{cartItem.map((item) => {
        return <CartItemList key={item.cartID} item={item}/>
    })}</div>
  )
}

export default CartItems