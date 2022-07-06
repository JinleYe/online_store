import React from "react";
import Products from "./Product";


const ProductsList = ({ products, currProductId, setCurrProductId }) => {

    return (
        <section className="p-cards">
            {products.map((product) => (
                <Products
                    key={product.id}
                    product={product}
                    currProductId={currProductId} 
                    setCurrProductId={setCurrProductId} />
                    
            ))}
            
        </section>
    );
}

export default ProductsList;