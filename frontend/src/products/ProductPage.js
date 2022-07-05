import React from 'react'

const ProductPage = ({products}) => {

    useEffect(() => {
        fetch(`http://localhost:8080/products/${productId}`)
        .then(response => response.json())
        .then(data => setAllProducts(data))
        console.log("useEffect from {products}")
    }, []);



  return (
    <div>
      
    </div>
  )
}

export default ProductPage
