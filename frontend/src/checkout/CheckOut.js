import Info from "./Info";
import OrderItems from "./OrderItems";
import './CheckOut.css';

const CheckOut = ({ shoppingCart, setShoppingCart, currUser, setCurrUser}) =>{
    return (
        <div className="checkout-container">
            <Info shoppingCart={shoppingCart}
                  setShoppingCart={setShoppingCart}
                  currUser={currUser}
                  setCurrUser={setCurrUser}/>
            <OrderItems shoppingCart={shoppingCart}
                        setShoppingCart={setShoppingCart}
                        currUser={currUser}
                        setCurrUser={setCurrUser}/>
        </div>
    );
}

export default CheckOut;