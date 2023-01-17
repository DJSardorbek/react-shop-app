import {useContext} from "react";
import {ShopContext} from "../context/context";

export default function Cart() {
    const {order, toogleBasket} = useContext(ShopContext);
    const quantity = order.length;
    return(
        <div className='cart blue darken-4 white-text' onClick={toogleBasket}>
            <i className='material-icons'>add_shopping_cart</i>
            <p className='quantity'>{quantity !== 0 ? quantity : null}</p>
        </div>
    )
}