import "../styles/Product.css";

const Products = ({product}) => {
    return (
        <>
        <div className="p-item">
        <h1>{product.title}</h1>
        <ul className="p-list">
            <li><p><strong>Price: </strong>£{product.price}</p></li>
            <li><strong>Description: </strong>{product.description}</li>
            <li><img src={product.image} alt={product.title}/></li>
            {/* <li><strong>Stock Availability: </strong>{product.stockQuantity}</li> */}
            {/* <li><strong>Category: </strong>{product.category}</li> */}
        </ul>
        </div>
        </>
    );
}

export default Products;