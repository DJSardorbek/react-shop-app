import BasketListItem from "./BasketListItem";
import {useContext} from "react";
import {ShopContext} from "../context/context";

export default function BasketList() {
    const {order, toogleBasket} = useContext(ShopContext);
    const totalPrice = order.reduce((sum, el) => {
        return sum += el.price * el.quantity;
    }, 0);
    return (
        <div className='basket-list'>
            <ul className="collection basket-ul">
                <li className="collection-item active">
                    Basket
                </li>
                {order.length !==0 ?
                    order.map((order) => (
                        <BasketListItem
                            key={order.id}
                            {...order}
                        />
                    )) :
                    <li className='collection-item'>
                        Basket is empty!
                    </li>
                }
                <li className="collection-item active">
                    Total price: {totalPrice}<b>$</b>
                </li>
                <span className='collection-content'>
                <i className='material-icons close' onClick={toogleBasket}>close</i>
            </span>
            </ul>
        </div>

    )
}