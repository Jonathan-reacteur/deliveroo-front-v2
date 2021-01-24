import Bandeau from "./Bandeau.js";
import Restaurant from "./Restaurant.js";
import RestaurantLoader from "./RestaurantLoader.js";

const Header = (props) => {
  const { restaurant } = props;
  const isRestaurantNull = restaurant === null;
  //
  // Rendering de l'encart Restaurant conditionné à la réception des données
  //
  const renderRestaurant = (restaurant) => {
    if (restaurant !== null) {
      console.log(restaurant.name);
      return (
        <Restaurant
          name={restaurant.name}
          description={restaurant.description}
          cover={restaurant.picture}
        />
      );
    } else {
      return <RestaurantLoader />;
    }
  };

  return (
    <>
      <div className="Header">
        <div>{isRestaurantNull ? "zer" : "coucou"}</div>
        <Bandeau />
        {renderRestaurant(restaurant)}
      </div>
    </>
  );
};

export default Header;
