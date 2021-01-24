import "./App.css";
import Header from "./components/Header.js";
import retrieveRestaurantInfo from "./service/retrieveRestaurantInfo.js";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchDatas = async () => {
      const response = await retrieveRestaurantInfo();
      setData(response.data);
    };

    fetchDatas();
  }, []);
  console.log(data);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       "https://lereacteur-deliveroo-api.herokuapp.com"
  //     );

  //     setData(response.data);
  //   };

  //   fetchData();
  //    }, []);
  return (
    <>
      <div className="App">
        <Header restaurant={data ? data.restaurant : null} />
      </div>
    </>
  );
}

export default App;
