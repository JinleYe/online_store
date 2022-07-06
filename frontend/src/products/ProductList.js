import React from "react";
import Products from "./Product";


const ProductsList = ({ products, currProductId, setCurrProductId, currProduct, setCurrProduct }) => {

    return (
        <section className="p-cards">
            {products.map((product) => (
                <Products
                    key={product.id}
                    product={product}
                    currProductId={currProductId} 
                    setCurrProductId={setCurrProductId}
                    currProduct={currProduct} 
                    setCurrProduct={setCurrProduct} />
                    
            ))}
            
        </section>
    );
}

export default ProductsList;