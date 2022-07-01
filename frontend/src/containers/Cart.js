import { useEffect } from "react";
import './Cart.css';
import SingleCart from "../components/SingleCart";

const Cart = ({isLogin, setIsLogin, currUser, setCurrUser, shoppingCart, setShoppingCart}) => {

    // useEffect(() =>{
    //     setShoppingCart(pre => isLogin ? pre = currUser.cart : shoppingCart);
    // },[])
    
    const cartList = shoppingCart.products.map((product, index) => {
        return(
            <tr>
                <SingleCart product={product} quantity={shoppingCart.quantity[index]}/>
            </tr>
        )
    })

    return (
        
        <div className="cart-container">
            
            <div className="my-cart">
                <h3 className="my-cart">My Cart({shoppingCart.products.length})</h3>
                <span>line here</span>

                <table>
                    <thead>
                        <tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th></tr>
                    </thead>
                    <tbody>{cartList}</tbody>
                </table>

            </div>
    
            <div className="total-div"></div>
        </div>
    )
}

export default Cart;