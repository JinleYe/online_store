import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import SearchBar from "../components/SearchBar";
import CheckBox from "../filters/Checkbox";


const ProductContainer = () => {

    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [checkedLaptop, setCheckedLaptop] = useState(false);
    const [checkedKeyboard, setCheckedKeyboard] = useState(false);
    const [checkedGamingChair, setCheckedGamingChair] = useState(false);
    const [checkedGamingMouse, setCheckedGamingMouse] = useState(false);
    const [checkedGamingConsole, setCheckedGamingConsole] = useState(false);
    const [checkedGamingHeadset, setCheckedGamingHeadset] = useState(false);
    const [checkedGamingController, setCheckedGamingController] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/products")
        .then(response => response.json())
        .then(data => setAllProducts(data))
    }, []);
    
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


      const filteredByCategory = (category) => {
        
        if (query != null){
            const updateQuery = []
            setQuery(updateQuery);
            const updateProducts = [...allProducts]
            setProducts(updateProducts);
            console.log("query check");
        }

        let check = null

        if(category === "laptop"){
            check = checkedLaptop
            console.log("laptop")
        } else if (category === "gamingkeyboard"){
            check = checkedKeyboard
            console.log("gaming keyboard")
        } else if (category === "gamingchair") {
            check = checkedGamingChair
            console.log("gaming chair")
        } else if (category === "gamingmouse") {
            check = checkedGamingMouse
            console.log("gaming mouse")
        } else if (category === "gamingconsole") {
            check = checkedGamingConsole
            console.log("gaming mouse")
        } else if (category === "gamingheadset") {
            check = checkedGamingHeadset
            console.log("gaming mouse")
        } else if (category === "gamingcontroller") {
            check = checkedGamingController
            console.log("gaming controller")
        }

        const newProducts = allProducts.filter((allProducts) => {return allProducts.category.toLowerCase().includes(category) })

        if(filteredProducts.length > 0){
            if(check === false){
                const updateProducts = [...filteredProducts, ...newProducts];
                setFilteredProducts(updateProducts);
                check = true;
                console.log("test double filter");
            }
            else{
                if(newProducts.length < filteredProducts.length) {
                    const resetProducts = filteredProducts.filter((filteredProducts) => !filteredProducts.category.toLowerCase().includes(category))
                    setFilteredProducts(resetProducts);
                    check = false;
                    console.log("removed " + category + " from results");

                } else {
                    const resetProducts = [];
                    setFilteredProducts(resetProducts);
                    check = false;
                    console.log("all returned")
                }
            }
        } else if(check === false){
            setFilteredProducts(newProducts);
            check = true;
            console.log("test one filter");
        }

        if(category === "laptop"){
            setCheckedLaptop(check)
            console.log(checkedLaptop)
            console.log("laptop changed check")
        } else if (category === "gamingkeyboard"){
            setCheckedKeyboard(check)
            console.log("gaming keyboard")
        } else if (category === "gamingchair") {
            setCheckedGamingChair(check)
            console.log("gaming chair")
        } else if (category === "gamingmouse") {
            setCheckedGamingMouse(check)
            console.log("gaming mouse")
      } else if (category === "gamingconsole") {
        setCheckedGamingConsole (check)
        console.log("games console")
      } else if (category === "gamingheadset") {
        setCheckedGamingHeadset(check)
        console.log("gaming headset")
      } else if (category === "gamingcontroller") {
        setCheckedGamingController(check)
        console.log("gaming controller")
      }
    }

      const searchProduct = () => {
        if(filteredProducts.length > 0) {
            const updatedProducts = [];
            setFilteredProducts(updatedProducts);
        }
      }

      const productsToShow = filteredProducts.length > 0 ? filteredProducts : products
    

    return (
        <div>
            <h1 className="p-title">All Products</h1>
           <SearchBar className="Search" getQuery={(q) => setQuery(q)} searchProduct={searchProduct} />
        <CheckBox filteredByCategory={filteredByCategory}/>
        <ProductList
            products={productsToShow} />
        </div>
    );
    
}

export default ProductContainer;