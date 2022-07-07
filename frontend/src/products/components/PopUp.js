import {FaRegHandPeace} from 'react-icons/fa';
import '../ProductDetail.css';
const PopUp = ({isOpen, setIsOpen, currProduct}) =>{
    console.log("pop up")

    const handleClosePop = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
        
    }


    return (
        <div className="popup-box">
            <div className="box">
                <button className="close-icon" onClick={handleClosePop}>x</button>
                <p><FaRegHandPeace/>{currProduct.title} has been added to your cart!</p>
            </div>
        </div>
    )
}

export default PopUp;