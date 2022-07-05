import "./Home.css";
import SlideShow1 from "../components/SlideShow1";
import Offer from "../components/Offer";
import HomeProduct from "../components/HomeProduct";

const Home = () => {

  return (
    <div className="home-container">
      <SlideShow1 />

      <HomeProduct/>
        
      <Offer />
      
    </div>
  );
};
export default Home;
