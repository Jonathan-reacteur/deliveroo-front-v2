import Courses from "./Courses.js";
import Cart from "./Cart.js";
const Menu = (props) => {
  const { categories, setCart, cart } = props;
  if (props) {
    console.log(props);
    console.log(categories[0].name);
  }

  return (
    <div className="greyBlack">
      <div className="wrapper">
        <div className="restaurantDetails">
          <div className="meals">
            {categories.map((elem, index) => {
              return (
                <Courses
                  key={index}
                  name={elem.name}
                  items={elem.meals}
                  setCart={setCart}
                  cart={cart}
                />
              );
            })}
          </div>
          <Cart className="basket" cart={cart} setCart={setCart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Menu;
