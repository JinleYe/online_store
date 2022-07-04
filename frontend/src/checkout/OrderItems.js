import { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';


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
        <li>
            <div><img src={product.image} height="60px"/></div>
            <div>{product.title}</div>
            <div>{product.price}</div>
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

                <button className="checkout-btn" onClick={handlePlaceOrder}>Place Order</button>
            </div>
        </div>
    );
}

export default OrderItems;