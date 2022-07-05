import { ratingClasses } from "@mui/material";
import { useEffect, useState } from "react";
import desktop from "../images/desktop.png";
import Products from "../products/Product";
import "./MyOrders.css"



const MyOrders = ({currUser, setCurrUser})=> {
    console.log(currUser.name);
    // const [orders, setOrders] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:8080/orders`)
    //                .then(response => response.json())
    //                .then(data => setOrders(data))
    //                 console.log(orders);
    //   },[orders])  

// useffect, fetch here

const orders = currUser.orders.map(order => (

    <div> 
        <h2>{order.title}</h2>
        <p> ORDER NUMBER: {order.id}</p>
        <p> TIME OF PURCHASE: {order.timeOfPurchase}</p>
        <p> ORDER STATUS: {order.status}</p>
        {/* <p> PRODUCT CATEGORY: {order.product.category}</p> */}
        {/* <p> ORDER DESCRIPTION: {order.products}</p> */}
        <img src={desktop} alt="image" />
        { order.products.map(product => (
            <div>
                <p>product title: {product.title} </p>
                <p>product title: {product.price} </p>
            </div>
        ))
}
    </div>
))




    



// const reviews = currUser.reviews.map(review => (
//     <div> 
//         <h2>{review.title}</h2>
//         <p>TITLE OF REVIEW: {review.title}</p>
//         <p>RATING: {review.rating}</p>
//         <p>  DATE OF REVIEW POSTED:{review.datePosted}</p>
//         <p> ITEM DESCRIPTION: {review.description}</p>
//         <img src={desktop} alt="image" />
//     </div>
// ))


    return (
        <div className="my_orders-container">
        {orders} 
        {/* {reviews} */}
        </div>
    )
}

export default MyOrders;