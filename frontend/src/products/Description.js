import { useEffect, useState } from "react";
import {AiOutlineArrowRight} from 'react-icons/ai';

const Description = ({currProductId, selectedProductId}) => {
    
    const [currProduct, setCurrProduct] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:8080/products/${currProductId}`)
        .then((res) => res.json())
        .then(data => setCurrProduct(data))
    },[currProductId])
    
    
    return (
        <div className="description-container">
            
            <div className="product-info">
                <h4>Product infomation</h4>
                <p>{currProduct.description}</p>
            </div>

            <div className="more-details">
                <h4>More details</h4>
                <p><AiOutlineArrowRight /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                <p><AiOutlineArrowRight /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                <p><AiOutlineArrowRight />Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>

        </div>
    );
}

export default Description;
