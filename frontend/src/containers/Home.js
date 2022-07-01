import './Home.css';
import SlideShow1 from '../components/SlideShow1';
import Offer from '../components/Offer';

const Home = () => {
    return (
        <>
        <SlideShow1/>
      
        <div className='featured-products'>
            <h2 className='featured-products-title'>Featured Products</h2> 
            <div className="image-grid">   
            <div className="featured-image">
                <img className="tv-image"src="https://media.currys.biz/i/currysprod/wk9-block-sony-television?$webpLarge" alt="tv" />
            </div>
            <div className="featured-image">
                <img className="laptop-image"src="https://media.currys.biz/i/currysprod/wk9-block-hp-laptop?$webpLarge$" alt="laptop" />
            </div>
            <div className="featured-image">
                <img className="hoover-image"src="https://media.currys.biz/i/currysprod/wk9-block-shark-fndd?$webpLarge$" alt="hoover" />
            </div>
        </div>
    </div>  

    <Offer />
    </>  
    );
}

export default Home;