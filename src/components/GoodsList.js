import GoodsItem from "./GoodsItem";

export default function GoodsList(props) {
    const {goods, addToBasket} = props;
    return (
        <div className='goods'>
            {goods.map(item => (
                <GoodsItem key={item.id} addToBasket={addToBasket} {...item}/>
            ))}
        </div>
    )
}