
import "./Cart.scss"


function Cart (props) {

    return (
        <div className="cart">
            <h2 className="cart__title">Корзина</h2>
            <button type="button" className="cart__close" onClick={props.closeCart}>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
            {
              props.cart.length ? props.cart.map(item=>{
                    return (
                        <div key={item.id} className="cart__item">
                            <div className="cart__name">{item.name}</div>
                            <div className="cart__price">{item.price * item.count} $</div>
                            <div className="cart__count">{item.count} шт.</div>
                            <button type="button" className="cart__remove" onClick={()=>{props.removeCartProduct(item.id)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                        </div>

                    )
                }) : "Ваша корзина пуста"
            }
            {
                props.cart.length ? 
                <div>
                    <p className="cart__total">
                        <b>Всего:</b> {props.total} $
                    </p>
                    <button type="button" className="cart__btn">Оформить</button>
                </div>
                :
                ""
            }
        </div>
    )
}

export default Cart;