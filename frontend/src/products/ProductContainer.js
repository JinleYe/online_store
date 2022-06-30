import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import SearchBar from "../components/SearchBar";

const ProductContainer = () => {

    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:8080/products?title=${query}`)
          .then(response => response.json())
          .then(data => setProducts(data))
      }, [query]);

      useEffect(() => {
        fetch(`http://localhost:8080/products?description=${query}`)
          .then(response => response.json())
          .then(data => setProducts(data))
      }, [query]);

      

    return (
        <div>
            <h1 className="p-title">All Products</h1>
           <SearchBar className="Search" getQuery={(q) => setQuery(q)} />
        <ProductList
            products={products} />
        </div>
    );

}

export default ProductContainer;