import currencyFormatter from "../utils/currencyFormatter";

const Courses = (props) => {
  const { key, name, items } = props;
  console.log(key);
  console.log(name);
  console.log(items);
  return (
    <>
      <div className="courses">
        <div className="courseTitle">
          <h2>{name}</h2>
        </div>
        <div className="courseItems">
          {items.map((elem, index) => {
            return (
              <>
                <div className="courseItem">
                  <div className="courseItemTitle">{elem.title}</div>
                  <div className="courseItemDescription">
                    {elem.description}
                  </div>
                  <div className="courseItemZonePrix">
                    <div className>{currencyFormatter(elem.price)}</div>
                    <div className>{elem.popular}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      ;
    </>
  );
};

export default Courses;
