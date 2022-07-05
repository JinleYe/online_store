import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Cart.css';
import CartContent from "./CartContent";





const Cart = ({isLogin, setIsLogin, currUser, setCurrUser, shoppingCart, setShoppingCart}) => {

    const navigate = useNavigate();

    useEffect(() =>{
        setShoppingCart(pre => isLogin ? pre = currUser.cart : shoppingCart);
        console.log("fetch cart")
    },[currUser])


    

    const handleShop = () =>{
        navigate('/products');
    }




    return (
        
        <div className="cart-container">
            
            <div className="my-cart">
                {shoppingCart && Object.keys(shoppingCart).length == 0 || Object.values(shoppingCart)[1].length == 0 ? 
                    <>
                        <h2 className="empty-cart">Your shopping cart is empty!</h2>
                        <button className="button-49" role="button" onClick={handleShop}>
                        LET'S SHOP
                        </button>
                    </> : 
                    <CartContent shoppingCart={shoppingCart}
                                 setShoppingCart={setShoppingCart}
                                 isLogin={isLogin} 
                                 setIsLogin={setIsLogin}
                                 currUser={currUser} 
                                 setCurrUser={setCurrUser} />}
                
            </div>
    
            <div className="total-div"></div>
        </div>
    )
}

export default Cart;