import {useContext} from "react";
import {ShopContext} from "../context/context";
import {toast} from "react-toastify";

export default function BasketListItem(props) {
    const {id, name, price, quantity} = props;
    const {deleteOrder, incrementQuantity, decrementQuantity} = useContext(ShopContext);
    return (
        <li className='collection-item'>
            {name} x{quantity} = {price * quantity}<b>$</b>
            <span className='secondary-content'>
                <i
                    className='material-icons delete'
                    onClick={() => {
                        deleteOrder(id);
                        toast.error('goods removed from basket')
                    }}
                >delete_forever</i>
            </span>
            <span className='secondary-content'>
                <i
                    className='material-icons delete'
                    style={{margin: '0px 5px'}}
                    onClick={() => decrementQuantity(id)}
                >remove_circle</i>
            </span>
            <span className='secondary-content'>
                <i
                    className='material-icons delete'
                    onClick={() => incrementQuantity(id)}
                >add_circle</i>
            </span>


        </li>

    )
}