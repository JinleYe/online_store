import { useRef } from "react";


const SingleCart = ({product, quantity}) =>{

    const inputQuant = useRef(quantity);
    
    const handleChange = (event) => {
        event.preventDefault();
        // document.querySelector('.input-quant').value = quantity++;
        console.log(inputQuant.current.value)
    }
    return (
        <>
            <td>{product.title}</td>
            <td>￡{product.price}</td>
            <td>
                <div>
                    <input type="button" value="-" className="minus"/>
                    <input type="number"  defaultValue={quantity} step="1" min="1" className="input-quant" size="4" onClick={handleChange} ref={inputQuant}/>
                    <input type="button" value="+" className="plus"/>
                </div>
            </td>
            <td>￡{product.price * quantity}</td>
        </>
    )
}

export default SingleCart;