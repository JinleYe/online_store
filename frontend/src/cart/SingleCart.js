import { useRef, useEffect } from "react";
import QtyBox from "./QtyBox";

const SingleCart = ({product, quantity, isLogin, setIsLogin, currUser, setCurrUser}) =>{

    const inputQuant = useRef(quantity);

    useEffect(() => {
        isLogin && fetch(`http://localhost:8080/customers/${currUser.id}`)
                   .then(response => response.json())
                   .then(data => setCurrUser(data))
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
            <td><div><img src={product.image} height="100px"/><span>{product.title}</span></div></td>
            <td>￡{product.price}</td>
            <td>
                <div>
                    {/* <input type="button" value="-" className="minus"/>
                    <input type="number"  defaultValue={quantity} step="1" min="1" className="input-quant" size="4" onClick={handleChange} ref={inputQuant}/>
                    <input type="button" value="+" className="plus"/> */}
                    {/* <QtyBox /> */}
                    <select name="qty" onChange={handleChangeSelect} ref={inputQuant}>
                        
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                </div>
            </td>
            <td>￡{product.price * quantity}</td>
        </>
    )
}

export default SingleCart;