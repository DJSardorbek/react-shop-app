import BasketListItem from "./BasketListItem";

export default function BasketList(props) {
    const {orders = [], handleBasketShow, deleteOrder, incrementOrder, decrementOrder} = props;
    const totalPrice = orders.reduce((sum, el) => {
        return sum += el.price * el.quantity;
    }, 0);
    return (
        <div className='basket-list'>
            <ul className="collection basket-ul">
                <li className="collection-item active">
                    Basket
                </li>
                {orders.length !==0 ?
                    orders.map((order) => (
                        <BasketListItem
                            key={order.id}
                            {...order}
                            deleteOrder={() => deleteOrder(order.id)}
                            incrementOrder={() => incrementOrder(order.id)}
                            decrementOrder={() => decrementOrder(order.id)}
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
                <i className='material-icons close' onClick={handleBasketShow}>close</i>
            </span>
            </ul>
        </div>

    )
}