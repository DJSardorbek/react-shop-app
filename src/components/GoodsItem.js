import {useContext} from "react";
import {ShopContext} from "../context/context";
import {toast} from "react-toastify";

export default function GoodsItem(props) {
    const {id, name, description, price, full_background} = props;
    const {addToBasket, order} = useContext(ShopContext);
    return (
        <div key={id} className="card">
            <div className="card-image">
                <img src={full_background} alt={name}/>
            </div>
            <div className="card-content">
                <span className="card-title">
                    {name}
                </span>
                <p className='card-description'>
                    {description}
                </p>
            </div>
            <div className="card-action">
                <button onClick={() => {
                    addToBasket({id, name, price});
                    const orderIndex = order.find(order => order.id === id);
                    if(!orderIndex){toast.success('goods added to basket')}
                }} className='btn'>Buy</button>
                <span className='right' style={{fontSize: '1.8rem'}}>{price}$</span>
            </div>
        </div>
    )
}