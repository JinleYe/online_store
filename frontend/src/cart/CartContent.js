import SingleCart from "./SingleCart";
import './CartContent.css';
import {Link} from 'react-router-dom';

const CartContent = ({shoppingCart, setShoppingCart, isLogin, setIsLogin, currUser, setCurrUser,}) =>{

    const orderValue = shoppingCart.products.map(product => product.price).reduce((a, b) => a+b, 0);

    const cartList = shoppingCart.products.map((product, index) => {
        return(
            <tr>
                <SingleCart product={product} quantity={shoppingCart.quantity[index]}
                            isLogin={isLogin} setIsLogin={setIsLogin}
                            currUser={currUser} setCurrUser={setCurrUser}/>
            </tr>
        )
    })

    const handleClearCart = (event) => {
        event.preventDefault();
        fetch(`http://localhost:8080/customers/clearcart/${currUser.id}`,
            {
                
            }
        )

        // setShoppingCart({})
    }


    return (
        
        <div className="cart-content">
            
            <h3 className="cart-title">My Cart({shoppingCart.products.length})</h3>
            <span className="line-here"></span>
            <div className="cart-body">
                <div className="cart-left">
                    <table>
                        <thead>
                            <tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th></tr>
                        </thead>
                        <tbody>{cartList}</tbody>
                    </table>
                    <button onClick={handleClearCart}>Clear Cart</button>
                </div>

                <div className="cart-right">
                    <ul className="cart-values">
                        <li className="value-li">Order value:</li>
                        <li className="value-li">￡{orderValue}</li>
                    </ul>

                    <ul className="cart-values">
                        <li className="value-li">Delivery:</li>
                        <li className="value-li">￡5</li>
                    </ul>

                    <ul className="cart-values">
                        <li className="value-li">Total:</li>
                        <li className="value-li">￡{orderValue+5}</li>
                    </ul>

                    <button className="checkout-btn"><Link to="/checkout">Proceed To Checkout</Link></button>
                    

                </div>
            </div>
            

        </div>
        
        
    )
}

export default CartContent;
