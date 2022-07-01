import "./Home.css";
import SlideShow1 from "../components/SlideShow1";
import Offer from "../components/Offer";
import headset from "../images/Headset.png";
import desktop from "../images/desktop.png";
import laptop from "../images/laptop.png";
import legionlaptop from "../images/legionlaptop.png";
import ps5headset from "../images/ps5headset.png";
import mouse from "../images/mouse.png";
import ps5 from "../images/ps5.png";
import oculus from "../images/oculus.png";
import xboxcontroller from "../images/xboxcontroller.png";
import vrheadset from "../images/vrheadset.png";
import joystick from "../images/joystick.png";
import ps5controller from "../images/ps5controller.png";
import leftArrow from "../images/left-arrow.png";
import rightArrow from "../images/right-arrow.png";
import Tile from "../components/Tile";
import { useState } from "react";
import SubTitle from "../components/SubTitle";
import HomeProduct from "../components/HomeProduct";

const Home = () => {
  const [imageURL, setImageURL] = useState(headset);
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter === featuredProducts.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(featuredProducts.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  const featuredProducts = [headset, desktop, laptop];

  return (
    <div className="home-container">
      <SlideShow1 />

      <HomeProduct/>
        
      <Offer />
      
    </div>
  );
};
export default Home;
