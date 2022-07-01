import SingleCart from "./SingleCart";

const CartContent = ({shoppingCart, setShoppingCart}) =>{

    const cartList = shoppingCart.products.map((product, index) => {
        return(
            <tr>
                <SingleCart product={product} quantity={shoppingCart.quantity[index]}/>
            </tr>
        )
    })


    return (
        
        <div className="cart-content">
            
            <h3 className="cart-title">My Cart({shoppingCart.products.length})</h3>
            <span>line here</span>
            <table>
                <thead>
                    <tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th></tr>
                </thead>
                <tbody>{cartList}</tbody>
            </table>
            

        </div>
        
        
    )
}

export default CartContent;
