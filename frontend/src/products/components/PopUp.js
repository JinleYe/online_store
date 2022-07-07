import {FaRegHandPeace} from 'react-icons/fa';
import '../ProductDetail.css';
const PopUp = ({isOpen, setIsOpen, currProduct}) =>{
    console.log("pop up")

    // const handleClosePop = (event) => {
    //     event.preventDefault();
        
    // }


    return (
        <div className="popup-box">
            <div className="box">
                <button className="close-icon"><a href="./products">x</a></button>
                <p><FaRegHandPeace/>{currProduct.title}<a href="./products"> has been added to your cart!x</a></p>
            </div>
        </div>
    )
}

export default PopUp;