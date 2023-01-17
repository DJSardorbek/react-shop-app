import GoodsItem from "./GoodsItem";
import {useContext} from "react";
import {ShopContext} from "../context/context";

export default function GoodsList() {
    const {goods} = useContext(ShopContext);
    return (
        <div className='goods'>
            {goods.map(item => (
                <GoodsItem key={item.id} {...item}/>
            ))}
        </div>
    )
}