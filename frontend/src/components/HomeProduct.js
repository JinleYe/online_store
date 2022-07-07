import "./HomeProduct.css";
import FeaturedTile from "./FeaturedTile"
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
import keyboard from "../images/keyboard.png";
import gamingmonitor from "../images/gamingmonitor.png";
import rightArrow from "../images/right-arrow.png";
import Tile from "./Tile";
import { useState } from "react";
import SubTitle from "./SubTitle";
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const HomeProduct = () => {
  const [imageURL, setImageURL] = useState(headset);
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter === featuredProducts.length - 3) {
      setCounter(0);
    } else {
      setCounter(counter +1);
    }
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(featuredProducts.length - 3);

    } else {
      setCounter(counter - 1);
    }
  };

  const featuredProducts = 
  [{"name": "Headset", "image": headset},
  {"name": "Desktop", "image": desktop},
  {"name": "Laptop", "image": laptop},
  {"name": "Gaming Monitor", "image": gamingmonitor},
  {"name": "Mechanical Keyboard", "image": keyboard}]

  // console.log(featuredProducts[0].img)


  const colors = ["#0088FE", "#00C49F", "#FFBB28"];

// console.log(counter)

  return (

      <div className="outer-featured-container">
        <h1 className="featured-product-title1"> FEATURED PRODUCTS</h1>
        <div className="tile-container">
          {/* <img
            src={leftArrow}
            alt="left arrow"
            onClick={handleDecrement}
            className="carousel__arrow_carousel__arrow--left"
          /> */}

<p alt="right arrow"
            onClick={handleDecrement} className ="tileArrow"><FiArrowLeft /></p>

          {/* {setImageURL(headset)} */}
          
          
        
          <Tile item={featuredProducts[counter]} />
          <Tile item={featuredProducts[counter +1]} />
          <Tile item={featuredProducts[counter +2]}/>
          
          <img
            src={rightArrow}
            alt="right arrow"
            onClick={handleIncrement}
            className="carousel__arrow_carousel__arrow--right"
          /> */}


        </div>
        <br />
        <br />
        <br />
        {/* <SubTitle subTitle="Latest Products" /> */}
        <h1 className="featured-product-title1"> LATEST PRODUCTS</h1>
        <br />
        <br />
        <div className="tile-container_latest">
          <FeaturedTile imageURL={mouse} title="G205 Gaming Mouse " />
          <FeaturedTile imageURL={legionlaptop} title="Lenovo Legion 5 Pro" />
          <FeaturedTile imageURL={ps5} title="Playstation 5" />
          <FeaturedTile imageURL={ps5headset} title="Wireless Headphones" />
          <FeaturedTile imageURL={oculus} title="Oculus Quest 2" />
          <FeaturedTile imageURL={xboxcontroller} title="Xbox Series X Controller" />
        </div>
        <br />
        <br />
        <br />
        {/* <SubTitle subTitle="Trending Products" /> */}
        <h1 className="featured-product-title1"> TRENDING PRODUCTS</h1>
        <br />
        <br />
        <div className="tile-container_trending_products">
          <FeaturedTile imageURL={vrheadset} title="VR Headset" />
          <FeaturedTile imageURL={joystick} title="Atari 2600 Joystick" />
          <FeaturedTile imageURL={ps5controller} title="PS5 Dualshock Controller" />
        </div>

      </div>

     
    
  );
};
export default HomeProduct;