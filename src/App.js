import "./App.css";
import Header from "./components/Header.js";
import Menu from "./components/Menu.js";
import MenuLoader from "./components/MenuLoader.js";
import retrieveRestaurantInfo from "./service/retrieveRestaurantInfo.js";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const itemTest = {
    priceItem: 30,
    idItem: "azeaze",
    libItem: "Baguette de pain gratuite",
    quantity: 1,
  };
  const [cart, setCart] = useState([itemTest]);
  useEffect(() => {
    const fetchDatas = async () => {
      const response = await retrieveRestaurantInfo();
      setData(response.data);
    };

    fetchDatas();
  }, []);
  let isLoaded = false;
  if (data) {
    isLoaded = true;
  }

  let restaurant = {};
  let categories = {};
  // Props pour bandeau :
  if (data) {
    restaurant = data.restaurant;
    categories = data.categories;
  }

  const affichageMenu = () => {
    if (isLoaded) {
      return <Menu categories={categories} setCart={setCart} cart={cart} />;
    } else {
      return <MenuLoader />;
    }
  };
  return (
    <>
      <div className="App">
        <Header restaurant={restaurant} />
        {affichageMenu()}
      </div>
    </>
  );
}

export default App;
