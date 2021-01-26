const Cart = (props) => {
  const { cart, setCart } = props;
  if (!cart || cart.length === 0) {
    return (
      <>
        <div>Panier vide</div>
      </>
    );
  }
  return (
    <>
      <div className="cartArea">
        {" "}
        <div className="cartListeItem">
          {cart.map((elem, index) => {
            return (
              <div className="OrderLine">
                <button className="button remove"> - </button>
                <div>{elem.quantity}</div>
                <button className="button add"> + </button>
                <div>{elem.libItem}</div>
                <div> - {elem.priceItem * elem.quantity} €</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Cart;
