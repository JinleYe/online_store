import { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './OrderItems.css';
import '../cart/CartContent.css';


const OrderItems = ({shoppingCart, setShoppingCart, currUser, setCurrUser}) => {

    const orderValue = shoppingCart.products.map(product => product.price).reduce((a, b) => a+b, 0);
    const navigate = useNavigate();

    useEffect( () =>{
        fetch(`http://localhost:8080/customers/${currUser.id}`)
        .then((res) => res.json())
        .then(data => setCurrUser(data))
        console.log("useEfect from ordeitems");
    }, [shoppingCart])

    const itemMap = shoppingCart.products.map(product => {return(
        <li className="product-li">
            <div className="img-box"><img src={product.image} height="50px" /></div>
            <div className="title-box">{product.title}</div>
            <div className="price-box">￡{product.price}</div>
        </li>
    )})


    const handlePlaceOrder = (event) => {
        event.preventDefault();

        const dateOfPurchase = new Date();
        console.log(dateOfPurchase.toISOString().split('T')[0]);
        const placeOrder = {
            timeOfPurchase: dateOfPurchase.toISOString().split('T')[0],
            status: "INPROGRESS",
            products:shoppingCart.products,
            customer: {
                id: currUser.id
            }
        }

        fetch("http://localhost:8080/orders",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(placeOrder)
            }
        )


        fetch(`http://localhost:8080/customers/clearcart/${currUser.id}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            }
        )


        setShoppingCart({});
        navigate('../products')


    
    }


    return (
        <div className="items-container">
            <ul className="items-ul">
                {itemMap}
            </ul>
            <div className="cart-right">
                <ul className="cart-values">
                    <li className="value-li">Order value:</li>
                    <li className="value-price">￡{parseFloat(orderValue).toFixed(2)}</li>
                </ul>

                <ul className="cart-values">
                    <li className="value-li">Delivery:</li>
                    <li className="value-price">￡5</li>
                </ul>

                <ul className="cart-values">
                    <li className="total-value">Total:</li>
                    <li className="total-price">￡{(parseFloat(orderValue)+5).toFixed(2)}</li>
                </ul>

                <button className="checkout-btn" onClick={handlePlaceOrder}><a href="/">Place Order</a></button>
            </div>
        </div>
    );
}

export default OrderItems;