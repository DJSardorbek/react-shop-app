import {useEffect, useState} from "react";
import {API_KEY, API_URL} from "./config";
import GoodsList from "./GoodsList";
import Loader from "./Loader";
import Cart from "./Cart";
import BasketList from "./BasketList";
import {toast} from "react-toastify";

export default function Shop() {
    const [goods, setGoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);

    const addToBasket = (item) => {
        const orderIndex = order.findIndex(order => order.id === item.id);
        if(orderIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            };
            setOrder([...order, newItem]);
            toast.success('Product added to basket');
        } else {
            order.map((orderItem, index) => {
                if(index === orderIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity += 1
                    };
                } else {
                    return orderItem;
                }
            });
        }
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const deleteOrder = (itemID) => {
        const orderIndex = order.findIndex(order => order.id === itemID);
        if(orderIndex > -1) {
            const newOrder = order.filter(order => order.id !== itemID);
            setOrder(newOrder);
            toast.error('Product deleted from basket');
        }
    }

    const incrementOrder = (itemID) => {
        const orderIndex = order.findIndex(order => order.id === itemID);
        if(orderIndex > -1) {
            const newOrder = order.map((item, index) => {
                if(index === orderIndex) {
                    return {
                        ...item,
                        quantity: item.quantity += 1
                    };
                } else {
                    return item;
                }
            });
            setOrder(newOrder);
        }
    }

    const decrementOrder = (itemID) => {
        const orderIndex = order.findIndex(order => order.id === itemID);
        if(orderIndex > -1) {
            const newOrder = order.map((item, index) => {
                if(index === orderIndex) {
                    return {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity -= 1 : 0
                    };
                } else {
                    return item;
                }
            });
            setOrder(newOrder);
        }
    }

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            }
        })
            .then((response) => response.json())
            .then((data) => {
                (data.featured && setGoods(data.featured));
                setIsLoading(false);
            });
    } ,[]);

    return (
        <div className='content container'>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {isLoading ? <Loader/> : <GoodsList goods={goods} addToBasket={addToBasket}/>}
            {isBasketShow &&
                <BasketList
                    orders={order}
                    handleBasketShow={handleBasketShow}
                    deleteOrder={deleteOrder}
                    incrementOrder={incrementOrder}
                    decrementOrder={decrementOrder}
                />}
        </div>
    )
}