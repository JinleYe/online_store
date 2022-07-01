import React from "react";
import headset from "../images/Headset.png";
import desktop from "../images/desktop.png";
import laptop from "../images/laptop.png";
import "./Tile.css"


const Tile = (props) => {
    const {imageURL, title} = props
  return (
    <div className="featured-products-container">
      <div className="featured-tile">
        <img className="featured-product-image" src={imageURL} alt="image" />
        <p className="featured-product-title">{title}</p>
      </div>
    </div>
  );
};

export default Tile;
