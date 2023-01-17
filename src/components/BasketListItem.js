export default function BasketListItem(props) {
    const {name, price, quantity, deleteOrder, incrementOrder, decrementOrder} = props;
    return (
        <li className='collection-item'>
            {name} x{quantity} = {price * quantity}<b>$</b>
            <span className='secondary-content'>
                <i
                    className='material-icons delete'
                    onClick={deleteOrder}
                >delete_forever</i>
            </span>
            <span className='secondary-content'>
                <i
                    className='material-icons delete'
                    style={{margin: '0px 5px'}}
                    onClick={decrementOrder}
                >remove_circle</i>
            </span>
            <span className='secondary-content'>
                <i
                    className='material-icons delete'
                    onClick={incrementOrder}
                >add_circle</i>
            </span>


        </li>

    )
}