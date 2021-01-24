import axios from "axios";
const fetchData = async () => {
  const response = await axios.get(
    "https://lereacteur-deliveroo-api.herokuapp.com"
  );

  return response;
};

export default fetchData;
