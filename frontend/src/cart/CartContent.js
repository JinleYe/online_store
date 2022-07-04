import SingleCart from "./SingleCart";
import './CartContent.css';

const CartContent = ({shoppingCart, setShoppingCart, isLogin, setIsLogin, currUser, setCurrUser,}) =>{

    const cartList = shoppingCart.products.map((product, index) => {
        return(
            <tr>
                <SingleCart product={product} quantity={shoppingCart.quantity[index]}
                            isLogin={isLogin} setIsLogin={setIsLogin}
                            currUser={currUser} setCurrUser={setCurrUser}/>
            </tr>
        )
    })


    return (
        
        <div className="cart-content">
            
            <h3 className="cart-title">My Cart({shoppingCart.products.length})</h3>
            <span>line here</span>
            <div className="cart-body">
                <div className="cart-left">
                <table>
                    <thead>
                        <tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th></tr>
                    </thead>
                    <tbody>{cartList}</tbody>
                </table>
                </div>

                <div className="cart-right">
                    <ul className="cart-values">
                        <li className="value-li">Order value:</li>
                        <li className="value-li">￡100</li>
                    </ul>

                    <ul className="cart-values">
                        <li className="value-li">Delivery:</li>
                        <li className="value-li">￡5</li>
                    </ul>

                    <ul className="cart-values">
                        <li className="value-li">Total:</li>
                        <li className="value-li">￡200</li>
                    </ul>

                    <button className="checkout-btn">Proceed To Checkout</button>
                    

                </div>
            </div>
            

        </div>
        
        
    )
}

export default CartContent;
