const Restaurant = (props) => {
  console.log(props);
  const { name, description, cover } = props;
  return (
    <>
      <div className="restaurantCenter">
        <div className="restaurantInformation">
          <div className="restaurantInformationTitre">
            <h1>{name}</h1>
          </div>
          <div className="restaurantInformationDescription">{description}</div>
        </div>
        <div className="RestaurantPictureWrapper">
          <img className="restaurantCover" src={cover}></img>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
