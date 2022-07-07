import {AiFillStar} from 'react-icons/ai';


const OneStar = () => {
    return (
        <ul className="rating-ul">
            <li><AiFillStar className="one-star" color="yellow"/></li>
            <li><AiFillStar className="two-star" color="grey"/></li>
            <li><AiFillStar className="three-star" color="grey"/></li>
            <li><AiFillStar className="four-star" color="grey"/></li>
            <li><AiFillStar className="five-star" color="grey"/></li>
        </ul>
    );
}


const TwoStar = () => {
    return (
        <ul className="rating-ul">
            <li><AiFillStar className="one-star" color="yellow"/></li>
            <li><AiFillStar className="two-star" color="yellow"/></li>
            <li><AiFillStar className="three-star" color="grey"/></li>
            <li><AiFillStar className="four-star" color="grey"/></li>
            <li><AiFillStar className="five-star" color="grey"/></li>
        </ul>
    );
}


const ThreeStar = () => {
    return (
        <ul className="rating-ul">
            <li><AiFillStar className="one-star" color="yellow"/></li>
            <li><AiFillStar className="two-star" color="yellow"/></li>
            <li><AiFillStar className="three-star" color="yellow"/></li>
            <li><AiFillStar className="four-star" color="grey"/></li>
            <li><AiFillStar className="five-star" color="grey"/></li>
        </ul>
    );
}


const FourStar = () => {
    return (
        <ul className="rating-ul">
            <li><AiFillStar className="one-star" color="yellow"/></li>
            <li><AiFillStar className="two-star" color="yellow"/></li>
            <li><AiFillStar className="three-star" color="yellow"/></li>
            <li><AiFillStar className="four-star" color="yellow"/></li>
            <li><AiFillStar className="five-star" color="grey"/></li>
        </ul>
    );
}


const FiveStar = () => {
    return (
        <ul className="rating-ul">
            <li><AiFillStar className="one-star" color="#FFD345"/></li>
            <li><AiFillStar className="two-star" color="#FFD345"/></li>
            <li><AiFillStar className="three-star" color="#FFD345"/></li>
            <li><AiFillStar className="four-star" color="#FFD345"/></li>
            <li><AiFillStar className="five-star" color="#FFD345"/></li>
            
            
        </ul>
    );
}


export {OneStar, TwoStar, ThreeStar, FourStar, FiveStar};