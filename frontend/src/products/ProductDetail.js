import './ProductDetail.css';
import { useState, useEffect } from 'react';
import {AiFillStar} from 'react-icons/ai';
import usePersistedState from '../components/usePersistedState';
import PopUp from './components/PopUp';
import {FaRegHandPeace} from 'react-icons/fa';
import {Link, Outlet} from 'react-router-dom';


const ProductDetail = ({currProductId, selectedProductId, currUser, setCurrUser, currProduct, setCurrProduct, isLogin}) => {

    //const [currProduct, setCurrProduct] = usePersistedState('currProduct', {});
    //const [currProduct, setCurrProduct] = useState({});
    const [isOpen, setIsOpen] = usePersistedState('isOpen', false);
    

    useEffect(() =>{
        fetch(`http://localhost:8080/products/${currProductId}`)
        .then(response => response.json())
        .then(data => setCurrProduct(data))
        console.log("useeffect from product detail")
    }, [currProductId])

    // const [currRating, setCurrRating] = useState(currProduct.reviews.length == 0 ? 0: parseFloat(currProduct.reviews.map(r => r.rating)
    //                                                          .reduce((a, b) => a+b,0))/currProduct.reviews.length);


    let currRating =  currProduct && Object.keys(currProduct.reviews).length == 0 || Object.values(currProduct)[8].length == 0  ? 0 : parseFloat(currProduct.reviews.map(r => r.rating).reduce((a, b) => a+b,0))/currProduct.reviews.length;
    //console.log(currRating);

    //let currRating = 0;


    // rendering the rating color 
    useEffect(() =>{
        console.log(currRating);
        if(currRating == 0){
            document.querySelector('.one-star').style.color = "grey";
            document.querySelector('.two-star').style.color = "grey";
            document.querySelector('.three-star').style.color = "grey";
            document.querySelector('.four-star').style.color = "grey";
            document.querySelector('.five-star').style.color = "grey";
        } else if ( 1 <= currRating && currRating < 2){
            document.querySelector('.one-star').style.color = "yellow";
            console.log("condition 1")
        } else if(2 <= currRating && currRating < 3){
            document.querySelector('.one-star').style.color = "yellow";
            document.querySelector('.two-star').style.color = "yellow";
            console.log("condition 2")
        } else if ( 3 <= currRating && currRating < 4){
            document.querySelector('.one-star').style.color = "yellow";
            document.querySelector('.two-star').style.color = "yellow";
            document.querySelector('.three-star').style.color = "yellow";
            console.log("condition 3")
        } else if (4 <= currRating && currRating < 5){
            document.querySelector('.one-star').style.color = "yellow";
            document.querySelector('.two-star').style.color = "yellow";
            document.querySelector('.three-star').style.color = "yellow";
            document.querySelector('.four-star').style.color = "yellow";
            console.log("condition 4")
        } else if( currRating == 5){
            console.log("condition 5")
            document.querySelector('.one-star').style.color = "yellow";
            document.querySelector('.two-star').style.color = "yellow";
            document.querySelector('.three-star').style.color = "yellow";
            document.querySelector('.four-star').style.color = "yellow";
            document.querySelector('.five-star').style.color = "yellow";
        }
    }, [currProduct])


    const handleAddProduct = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
        if(!isOpen && isLogin){
            fetch(`http://localhost:8080/customers/${currUser.id}/${currProduct.id}/1`, 
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }
                }
            )

            fetch(`http://localhost:8080/customers/${currUser.id}`)
            .then(response => response.json())
            .then(data => setCurrUser(data))
        }
        setIsOpen(!isOpen);
    }

    // const handleClose = () => {
    //     // event.preventDefault();
    //     console.log("from handle closse")
    //     setIsOpen(false);
    // }

    return (
        <div className="detail-container">
            <h3>Product Details</h3>
            <div className="product-container">
                <img src={currProduct.image} alt="product image" height="200px"/>
                <div className="product-words">
                    <p className="product-title">{currProduct.title}</p>
                    <ul className="rating-ul">
                        <li><AiFillStar className="one-star" color="grey"/></li>
                        <li><AiFillStar className="two-star" color="grey"/></li>
                        <li><AiFillStar className="three-star" color="grey"/></li>
                        <li><AiFillStar className="four-star" color="grey"/></li>
                        <li><AiFillStar className="five-star" color="grey"/></li>
                        <li>({currProduct.reviews.length})</li>
                    </ul>
                    <h3>£{currProduct.price}</h3>
                    <p>1 Year Warranty</p>
                    <button onClick={() => handleAddProduct()}>Add To Cart</button>
                    {isOpen &&  <PopUp  isOpen={isOpen}
                                        setIsOpen={setIsOpen}
                                        currProduct={currProduct} />
                    }

                    {/* {isOpen &&  <div className="popup-box">
                                    <div className="box">
                                        <div className="close-icon" onClick={() => setIsOpen(false)}>x</div>
                                        <p><FaRegHandPeace/>{currProduct.title} has been added to your cart!</p>
                                    </div>
                                </div>
                    } */}
                </div>
            </div>

            <div className="pink-container">
                    <ul className="detail-title-ul">
                        <li><Link to={"/productdetail-"+currProductId+"/description"}>Description</Link></li>
                        <li><Link to={"/productdetail-"+currProductId+"/review"}>Reviews</Link></li>
                    </ul>
                    <Outlet />
            </div>
        
        </div>
    );
}

export default ProductDetail;