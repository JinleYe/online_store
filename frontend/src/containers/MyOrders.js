import PageCount from "../filters/PageResults";
import "./MyOrders.css"

const MyOrders = ({currUser})=> {
  
const orders = currUser.orders.map(order => (

    <div className="order-container"> 
       
<div className="tables">
<table className="order-table">
    <thead>
  <tr className="order-tr">
    <th>Order Number</th>
    <th>Date Ordered</th>
    <th>Order Status</th>
    <th>Products</th>
    <th>Price</th>
    <th>Images</th>
  </tr>
  </thead>

  <tbody>
  <tr className="order-body-tr">
    <td>#{order.timeOfPurchase}-{order.id}</td>
    <td>{order.timeOfPurchase}</td>
    <td>{order.status}</td>
    <td>{ order.products.map(product => (
                <li>{product.title}</li>))} 
            </td>
    <td>{ order.products.map(product => (
            <li>£ {product.price}</li>))} 
    </td>
    <td><img className="order-image" src={order.products[0].image}></img></td>
  </tr>
  </tbody>
  </table>
  {/* <br/> */}

    </div>
    </div>
))

    return (
        <div className="my-orders-container">
        <h1 className="orders-title">{currUser.name}'s Order History</h1>

        <PageCount className="order-count" count={currUser.orders.length > 0 
            ? currUser.orders.length  + " results"
            : "No orders placed. Click on Place a New Order to make your first purchase"}/>

        <div className="orders">
        {orders} 
        <div className="order-button">
        <a href="./products" ><button className="order-history-btn">Place A New Order</button></a>
        </div>
        </div>
        </div>
    )
}

export default MyOrders;