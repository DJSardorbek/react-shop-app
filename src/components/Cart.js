export default function Cart(props) {
    const {quantity = 0, handleBasketShow = Function.prototype} = props;
    return(
        <div className='cart blue darken-4 white-text' onClick={handleBasketShow}>
            <i className='material-icons'>add_shopping_cart</i>
            <p className='quantity'>{quantity !== 0 ? quantity : null}</p>
        </div>
    )
}