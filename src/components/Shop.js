import {useContext, useEffect, useState} from "react";
import {API_KEY, API_URL} from "./config";
import GoodsList from "./GoodsList";
import Loader from "./Loader";
import Cart from "./Cart";
import BasketList from "./BasketList";
import {ShopContext} from "../context/context";

export default function Shop() {

    const {isLoading, isBasketShow, setGoods} = useContext(ShopContext);

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.featured);
            });
    } ,[]);

    return (
        <div className='content container'>
            <Cart/>
            {isLoading ? <Loader/> : <GoodsList/>}
            {isBasketShow && <BasketList/>}
        </div>
    )
}