import {useState, useEffect} from 'react';
import {OneStar, TwoStar, ThreeStar, FourStar, FiveStar} from './stars/Star';

const Review = ({currProductId, selectedProductId}) => {
    const [currReviews, setCurrReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/products/${currProductId}`)
        .then(response => response.json())
        .then(data => setCurrReviews(data.reviews))
    }, [currProductId])


    const handleRating = (review) => {
        if(review.rating <=1 ){
            return (<OneStar/>)
        } else if (review.rating == 2){
            return (<TwoStar/>)
        } else if (review.rating == 3){
            return (<ThreeStar/>)
        } else if (review.rating == 4){
            return (<FourStar/>)
        } else if (review.rating == 5){
            return (<FiveStar/>)
        }
    }



    const reviewsMap = currReviews.map(r => {
        return (
            <div className="single-review-container">
                <h4>{r.title}</h4>
                {r.verifiedPurchase && <div>"Verified Purchase"</div>}
                <p>{handleRating(r)}</p>
                <p>{r.datePosted}</p>
                <p>{r.description}</p>
            </div>
        );
    })
    
    return (
        <div className="review-container">
            {reviewsMap}
        </div>
    );
}

export default Review;