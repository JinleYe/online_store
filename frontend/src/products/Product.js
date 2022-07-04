import "../styles/Product.css";

const Products = ({product}) => {
    return (
        <div className="p-item">
        <h1>{product.title}</h1>
        <div className="p-item-info">
          <div className="p-img-div">
            <img className="p-img" src={product.image} alt={product.title}/>
            </div>
            <ul className="p-list">
            <div className="p-info-text">
            <li><p><strong>Rating: </strong>{product.rating}</p></li>
            <li><p><strong>Price: </strong>£{product.price}</p></li>
            <li><strong>Description: </strong>{product.description}</li>
            </div>
            {/* <li><strong>Stock Availability: </strong>{product.stockQuantity}</li> */}
            {/* <li><strong>Category: </strong>{product.category}</li> */}
        </ul>
        </div>
        </div>
    );
}

export default Products;