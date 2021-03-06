import {AiOutlineShoppingCart} from 'react-icons/ai';
import "../styles/Product.css";
import {Link, useNavigate} from 'react-router-dom';

const Products = ({product, currProductId, setCurrProductId, currProduct, setCurrProduct }) => {
    
    const navigate = useNavigate();

    const handleToProductDetail = (event) =>{
        event.preventDefault();
        setCurrProductId(product.id);
        setCurrProduct(product);
        navigate(`../productdetail-${product.id}`);
    }

    return (
        <div className="p-item">
        <h1>{product.title}</h1>
        <div className="p-item-info">
          <div className="p-img-div">
            <img className="p-img" src={product.image} alt={product.title}/>
            </div>
            <ul className="p-list">
            <div className="p-info-text">
            <li><p><strong>Price: </strong>£{product.price}</p></li>
            <li><p><strong>Rating: </strong>{product.rating}</p></li>
            <li><strong>Description: </strong>{product.description}</li>
            <div className='shopping-cart-btn'>
            <button className="basket-btn" onClick={handleToProductDetail}>View product</button>
            </div>
            </div>
            {/* <li><strong>Stock Availability: </strong>{product.stockQuantity}</li> */}
            {/* <li><strong>Category: </strong>{product.category}</li> */}
        </ul>
        </div>
        </div>
    );
}

export default Products;