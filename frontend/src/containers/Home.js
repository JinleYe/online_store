import "./Home.css";
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

  // setImage1(headset)
  return (
    <div className="outer-featured-container">
      <h1 className="featured-product-title1"> Featured Products</h1>
      <div className="tile-container">
        <img
          src={leftArrow}
          alt="left arrow"
          onClick={handleDecrement}
          className="carousel__arrow carousel__arrow--left"
        />

        {/* {setImageURL(headset)} */}
        <Tile imageURL={featuredProducts[counter]} title="Headsets" />
        <Tile imageURL={featuredProducts[counter + 1]} title="Desktops" />
        <Tile imageURL={featuredProducts[counter + 2]} title="Laptops" />
        <img
          src={rightArrow}
          alt="right arrow"
          onClick={handleIncrement}
          className="carousel__arrow carousel__arrow--right"
        />
      </div>
      <br />
      <br />
      <br />
      <SubTitle subTitle="Latest Products" />
      <br />
      <br />
      <div className="tile-container">
        <Tile imageURL={mouse} title="G205 Gaming Mouse " />
        <Tile imageURL={legionlaptop} title="Lenovo Legion 5 Pro" />
        <Tile imageURL={ps5} title="Playstation 5" />
        <Tile imageURL={ps5headset} title="Wireless Headphones" />
        <Tile imageURL={oculus} title="Oculus Quest 2" />
        <Tile imageURL={xboxcontroller} title="Xbox Series X Controller" />
      </div>
      <br />
      <br />
      <br />
      <SubTitle subTitle="Trending Products" />
      <br />
      <br />
      <div className="tile-container">
        <Tile imageURL={vrheadset} title="VR Headset" />
        <Tile imageURL={joystick} title="Atari 2600 Joystick" />
        <Tile imageURL={ps5controller} title="PS5 Dualshock Controller" />
      </div>
    </div>
  );
};
export default Home;
