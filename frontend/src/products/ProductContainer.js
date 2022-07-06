import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import SearchBar from "../components/SearchBar";
import CheckBox from "../filters/Checkbox";
import PageCount from "../filters/PageResults";
import SortBy from "../filters/SortBy";


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
    const [sortedByValue, setSortedByValue] = useState(null);
    

    useEffect(() => {
        fetch("http://localhost:8080/products")
        .then(response => response.json())
        .then(data => setAllProducts(data))
        console.log("useEffect from {products}")
    }, []);
    
    useEffect(() => {
        fetch(`http://localhost:8080/products?title=${query}`)
          .then(response => response.json())
          .then(data => setProducts(data))
          console.log("useEffect from {products.title}")
      }, [query]);

    useEffect(() => {
        fetch(`http://localhost:8080/products?description=${query}`)
          .then(response => response.json())
          .then(data => setProducts(data))
          console.log("useEffect from {products.description}")
      }, [query]);


      const filteredByCategory = (category) => {
        
        if (query != null){
            const updateQuery = []
            setQuery(updateQuery);
            const updateProducts = [...allProducts]
            setProducts(updateProducts);
        }

        let check = null

        if(category === "laptop"){
            check = checkedLaptop
        } else if (category === "gamingkeyboard") {
            check = checkedKeyboard
        } else if (category === "gamingchair") {
            check = checkedGamingChair
        } else if (category === "gamingmouse") {
            check = checkedGamingMouse
        } else if (category === "gamingconsole") {
            check = checkedGamingConsole
        } else if (category === "gamingheadset") {
            check = checkedGamingHeadset
        } else if (category === "gamingcontroller") {
            check = checkedGamingController
        }

        const newProducts = allProducts.filter((allProducts) => {return allProducts.category.toLowerCase().includes(category) })

        if(filteredProducts.length > 0){
            if(check === false){
                check = true;
                const allFilteredProducts = [...filteredProducts, ...newProducts];
                if(sortedByValue === "lowest") {
                    const updateProducts = allFilteredProducts.sort((a, b) => a.price - b.price)
                    setFilteredProducts(updateProducts)

                } else if(sortedByValue === "highest") {
                    const updateProducts = allFilteredProducts.sort((a, b) => b.price - a.price)
                    setFilteredProducts(updateProducts)

                } else if(sortedByValue === "a1") {
                    const updateProducts = allFilteredProducts.sort((a, b) => a.title > b.title ? 1 : (a.title === b.title ? 0 : -1))
                    setFilteredProducts(updateProducts)

                } else if(sortedByValue === "z1") {
                    const updateProducts = allFilteredProducts.sort((a, b) => b.title > a.title ? 1 : (a.title === b.title ? 0 : -1))
                    setFilteredProducts(updateProducts)

                } else {
                    setFilteredProducts(allFilteredProducts)
                }
            } 
            else {
                if(newProducts.length < filteredProducts.length) {
                    const resetProducts = filteredProducts.filter((filteredProducts) => !filteredProducts.category.toLowerCase().includes(category))
                    setFilteredProducts(resetProducts);
                    check = false;
                } else {
                    const resetProducts = [];
                    setFilteredProducts(resetProducts);
                    check = false;
                }
            }
        } else if(check === false){
            // setFilteredProducts(newProducts);
            check = true;
            console.log("laptop4")
            if(sortedByValue === "lowest") {
                const updateProducts = newProducts.sort((a, b) => a.price - b.price)
                setFilteredProducts(updateProducts)
            } else if(sortedByValue === "highest") {
                const updateProducts = newProducts.sort((a, b) => b.price - a.price)
                setFilteredProducts(updateProducts)
            } else if(sortedByValue === "a1") {
                const updateProducts = newProducts.sort((a, b) => a.title > b.title ? 1 : (a.title === b.title ? 0 : -1))
                setFilteredProducts(updateProducts)
            }   else if(sortedByValue === "z1") {
                const updateProducts = newProducts.sort((a, b) => b.title > a.title ? 1 : (a.title === b.title ? 0 : -1))
                setFilteredProducts(updateProducts)
            } else {
                setFilteredProducts(newProducts)
            }
        }

        if(category === "laptop"){
            setCheckedLaptop(check)
        } else if (category === "gamingkeyboard"){
            setCheckedKeyboard(check)
        } else if (category === "gamingchair") {
            setCheckedGamingChair(check)
        } else if (category === "gamingmouse") {
            setCheckedGamingMouse(check)
      } else if (category === "gamingconsole") {
        setCheckedGamingConsole (check)
      } else if (category === "gamingheadset") {
        setCheckedGamingHeadset(check)
      } else if (category === "gamingcontroller") {
        setCheckedGamingController(check)
      }

    //   if(sortedByValue === "lowest") {

    //     console.log(filteredProducts)
    //     const updatedProducts = filteredProducts.sort((a, b) => a.price - b.price)
    //     console.log(updatedProducts)
    //     setFilteredProducts(updatedProducts);
        
    //   }
    }


    const clearProductChecks = () => {
        const updatedProducts = [];
        setFilteredProducts(updatedProducts);
        setCheckedLaptop(false)
        setCheckedGamingChair(false)
        setCheckedGamingMouse(false)
        setCheckedKeyboard(false)
        setCheckedGamingConsole(false)
        setCheckedGamingHeadset(false)
        setCheckedGamingController(false)
    }


      const searchProduct = () => {
        if(filteredProducts.length > 0) {
            const updatedProducts = [];
            setFilteredProducts(updatedProducts);
            clearProductChecks();
        }
      }

      const productsToShow = filteredProducts.length > 0 ? filteredProducts : products;


      const sortItems = (e) => {
        setSortedByValue(e);
    

        if(e === "lowest"){
            if(filteredProducts.length > 0){
                const updatedProducts = filteredProducts.sort((a, b) => a.price - b.price)
                const updateAllProducts = [...allProducts]
                setFilteredProducts(updatedProducts);
                setProducts(updateAllProducts)
                console.log("yes filtered")

            } else {
                const updateProducts = products.sort((a, b) => a.price - b.price);
                setProducts(updateProducts)
                setFilteredProducts([])
            }
        } else if(e === "highest"){
            if(filteredProducts.length > 0){
                const updatedProducts = filteredProducts.sort((a, b) => b.price - a.price)
                const updateAllProducts = [...allProducts]
                setFilteredProducts(updatedProducts);
                setProducts(updateAllProducts)
            } else {
                const updateProducts = products.sort((a, b) => b.price - a.price);
                setProducts(updateProducts)
                setFilteredProducts([])
            }
        } else if(e === "a1") {
            if(filteredProducts.length > 0) {
                const updatedProducts = filteredProducts.sort((a,b) => a.title > b.title ? 1 : (a.title === b.title ? 0 : -1))
                const updateAllProducts = [...allProducts]
                setFilteredProducts(updatedProducts)
                setProducts(updateAllProducts)
            } else {
                const updateProducts = products.sort((a, b) => a.title > b.title ? 1 : (a.title === b.title ? 0 : -1))
                setProducts(updateProducts)
                setFilteredProducts([])
            } 
        } else if(e === "z1") {
            if(filteredProducts.length > 0) {
                const updatedProducts = filteredProducts.sort((a,b) => b.title > a.title ? 1 : (a.title === b.title ? 0 : -1))
                const updateAllProducts = [...allProducts]
                setFilteredProducts(updatedProducts)
                setProducts(updateAllProducts)
            } else {
                const updateProducts = products.sort((a, b) => b.title > a.title ? 1 : (a.title === b.title ? 0 : -1))
                setProducts(updateProducts)
                setFilteredProducts([])
            } 
        } else if (e === "default") {
            const updateProducts = [...allProducts]
            setProducts(updateProducts)
            setFilteredProducts([])
        }
     };


    return (
        <div>
        <h1 className="p-title">All Products</h1>
       
         <div className="search-element"> 
        <SearchBar className="Search" getQuery={(q) => setQuery(q)} searchProduct={searchProduct} />
        </div>  

        <div className="sort-count">
        <SortBy
        sortItems={sortItems} />

        <PageCount className="product-count" count={filteredProducts.length > 0 
            ? filteredProducts.length  + " results"
            : products.length + " results"}/>
            </div>

        <div className="product-page-wrap">            
        <div className="product-page-checkbox">            
        <CheckBox 
        className="product-checkbox" 
        filteredByCategory={filteredByCategory} 
        checkedLaptop={checkedLaptop} 
        checkedGamingChair={checkedGamingChair} 
        checkedGamingConsole={checkedGamingConsole} 
        checkedGamingController={checkedGamingController} 
        checkedGamingHeadset={checkedGamingHeadset} 
        checkedKeyboard={checkedKeyboard} 
        checkedGamingMouse={checkedGamingMouse} 
        clearProductChecks={clearProductChecks}
        />
        </div>
        <div className="products-page-list">
        <ProductList
            products={productsToShow} />
        </div>
        </div>
        </div>
    );
}

export default ProductContainer;