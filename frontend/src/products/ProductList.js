import React from "react";
import Products from "./Product";


const ProductsList = ({ products }) => {

    return (
        <section className="p-cards">
            {products.map((product) => (
                <Products
                    key={product.id}
                    product={product} />
            ))}
        </section>
    );
}

export default ProductsList;