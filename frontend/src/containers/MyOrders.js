import "./MyOrders.css"

const MyOrders = ({currUser})=> {
  
const orders = currUser.orders.map(order => (

    <div className="order-container"> 
        
        {/* <div className="order-no">
        <h2> Order Number: #{order.timeOfPurchase}-{order.id}</h2>
        </div>

        <div className="order-details">
        <ul>
            <li> Time of Purchase: {order.timeOfPurchase}</li>
            <li> Order Status: {order.status}</li>
            <li>{ order.products.map(product => (
                <ul>
                <li>Product: {product.title} - Price: £ {product.price} </li>
                <img  className="my-order-image" src={product.image} alt={product.title}></img>
                </ul>
            ))
            }  </li>
        </ul>
        <br/>
        </div> */}
<div className="tables">
<table>
    <thead>
  <tr>
    <th>Order Number</th>
    <th>Date Ordered</th>
    <th>Order Status</th>
    <th>Products</th>
    <th>Price</th>
    <th>Images</th>
  </tr>
  </thead>

  <tbody>
  <tr>
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