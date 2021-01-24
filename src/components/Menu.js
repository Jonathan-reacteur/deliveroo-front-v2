import Courses from "./Courses";
const Menu = (props) => {
  const { categories } = props;
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
                <Courses key={index} name={elem.name} items={elem.meals} />
              );
            })}
          </div>
          <div className="basket">test</div>
        </div>
      </div>
    </div>

    // <div className="greyBlack">
    //   <div className="wrapper">
    //     <div className="restaurantDetails">
    //       test2
    //       {categories.map((elem, index) => {
    //         return <Courses key={index} name={elem.name} items={elem.meals} />;
    //       })}
    //     </div>
    //     <div className="basket">test</div>
    //   </div>
    // </div>
  );
};

export default Menu;
