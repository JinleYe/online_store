const FeaturedTile = (props) => {
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

export default FeaturedTile;