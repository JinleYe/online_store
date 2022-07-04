import SingleCart from "./SingleCart";
import './CartContent.css';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';

const CartContent = ({shoppingCart, setShoppingCart, isLogin, setIsLogin, currUser, setCurrUser}) =>{

    const orderValue = shoppingCart.products.map(product => product.price).reduce((a, b) => a+b, 0);
    const [clickTime, setClickTime] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:8080/customers/${currUser.id}`)
        .then((res) => res.json())
        .then(data => setShoppingCart(data.cart))
        console.log("from cart content")
    }, [clickTime])

    const handleDeleteProduct = (product) => {
        

        fetch(`http://localhost:8080/customers/remove/${currUser.id}/${product.id}`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'}
            }
        )
        
        setClickTime(clickTime+1);

    }



    const cartList = shoppingCart.products.map((product, index) => {
        return(
            <tr>
                <SingleCart product={product} quantity={shoppingCart.quantity[index]}
                            isLogin={isLogin} setIsLogin={setIsLogin}
                            currUser={currUser} setCurrUser={setCurrUser}
                            shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
                <span onClick={() => handleDeleteProduct(product)}>x</span>
            </tr>
        )
    })

    const handleClearCart = (event) => {
        event.preventDefault();
        fetch(`http://localhost:8080/customers/clearcart/${currUser.id}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            }
        )

        setShoppingCart({});
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
