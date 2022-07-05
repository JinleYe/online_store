import { useRef, useEffect } from "react";
import QtyBox from "./QtyBox";
import './SingleCart.css';

const SingleCart = ({product, quantity, isLogin, setIsLogin, currUser, setCurrUser, shoppingCart, setShoppingCart}) =>{

    const inputQuant = useRef(quantity);

    useEffect(() => {
        isLogin && fetch(`http://localhost:8080/customers/${currUser.id}`)
                   .then(response => response.json())
                   .then(data => setCurrUser(data))
        setShoppingCart(currUser.cart)
        console.log("fetch single cart");
      },[inputQuant.current.value])


    const handleChangeSelect = (event) =>{
        event.preventDefault();
        console.log(inputQuant.current.value);

        if(isLogin){
            fetch(`http://localhost:8080/customers/${currUser.id}/${product.id}/${inputQuant.current.value}`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'}
            })
        }
    }

   

    return (
        <>
            <td className="product-col"><div className="cart-product"><img src={product.image} height="100px" className="cart-img"/>
                <div className="cart-product-des">{product.title}</div></div>
            </td>
            <td className="product-price">￡{product.price}</td>
            <td>
                <div className="quantity-box">
                    
                    <select name="qty" onChange={handleChangeSelect} ref={inputQuant} className="quantity-select">
                        <option value="0">{quantity}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                </div>
            </td>
            <td className="product-total-price">￡{product.price * quantity}</td>
        </>
    )
}

export default SingleCart;