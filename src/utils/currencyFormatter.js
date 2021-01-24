const currencyFormatter = (price) => {
  let currencyConverted = "";
  if (typeof price !== "string") {
    return "99999";
  } else {
    currencyConverted = price.replace(".", ",") + " €";
  }
  return currencyConverted;
};

export default currencyFormatter;
