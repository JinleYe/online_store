import { useEffect } from "react";
import './Cart.css';
import CartContent from "./CartContent";





const Cart = ({isLogin, setIsLogin, currUser, setCurrUser, shoppingCart, setShoppingCart}) => {

    useEffect(() =>{
        setShoppingCart(pre => isLogin ? pre = currUser.cart : shoppingCart);
    },[])
    






    return (
        
        <div className="cart-container">
            
            <div className="my-cart">
                {shoppingCart && Object.keys(shoppingCart).length == 0 ? 
                    <>
                        <h2 className="empty-cart">Your shopping cart is empty!</h2>
                        <button className="button-49" role="button">
                        LET'S SHOP
                        </button>
                    </> : 
                    <CartContent shoppingCart={shoppingCart}
                                 setShoppingCart={setShoppingCart} />}
                
            </div>
    
            <div className="total-div"></div>
        </div>
    )
}

export default Cart;