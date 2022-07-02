import SingleCart from "./SingleCart";

const CartContent = ({shoppingCart, setShoppingCart, isLogin, setIsLogin, currUser, setCurrUser,}) =>{

    const cartList = shoppingCart.products.map((product, index) => {
        return(
            <tr>
                <SingleCart product={product} quantity={shoppingCart.quantity[index]}
                            isLogin={isLogin} setIsLogin={setIsLogin}
                            currUser={currUser} setCurrUser={setCurrUser}/>
            </tr>
        )
    })


    return (
        
        <div className="cart-content">
            
            <h3 className="cart-title">My Cart({shoppingCart.products.length})</h3>
            <span>line here</span>
            <div className="cart-body">
                <div className="cart-left">
                <table>
                    <thead>
                        <tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th></tr>
                    </thead>
                    <tbody>{cartList}</tbody>
                </table>
                </div>

                <div className="cart-right">

                </div>
            </div>
            

        </div>
        
        
    )
}

export default CartContent;
