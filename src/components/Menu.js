import Courses from "./Courses";
const Menu = (props) => {
  const { categories } = props;
  if (props) {
    console.log(props);
    console.log(categories[0].name);
  }

  return (
    <div className="content">
      <div className="contentCenter">
        <div className="menu">
          {categories.map((elem, index) => {
            return <Courses key={index} name={elem.name} items={elem.meals} />;
          })}
        </div>
        <div className="zoneCard"></div>
      </div>
    </div>
  );
};

export default Menu;
