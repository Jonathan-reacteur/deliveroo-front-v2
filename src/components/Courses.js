import currencyFormatter from "../utils/currencyFormatter";

const Courses = (props) => {
  const { key, name, items } = props;
  console.log(key);
  console.log(name);
  console.log(items);
  if (items.length === 0) {
    return <></>;
  } else {
    return (
      <>
        <div className="courses">
          <div className="courseTitle">
            <h2>{name}</h2>
          </div>
          <div className="courseListeItem">
            <div className="courseItem">
              <div className="courseItemText">
                <p>Brunch pour tous</p>
                <p>assiette de jambon cuit</p>
                <div className="prixCat">
                  <p>25Euros</p>
                  <p>populaire</p>
                </div>
              </div>
              <img src="https://f.roocdn.com/images/menu_items/1583350/item-image.jpg"></img>
            </div>
            <div className="courseItem">
              <div className="courseItemText">
                <p>Brunch pour tous</p>
                <p>assiette de jambon cuit</p>
                <div className="prixCat">
                  <p>25Euros</p>
                  <p>populaire</p>
                </div>
              </div>
              <img src="https://f.roocdn.com/images/menu_items/1583350/item-image.jpg"></img>
            </div>
            <div className="courseItem">
              <div className="courseItemText">
                <p>Brunch pour tous</p>
                <p>assiette de jambon cuit</p>
                <div className="prixCat">
                  <p>25Euros</p>
                  <p>populaire</p>
                </div>
              </div>
              <img src="https://f.roocdn.com/images/menu_items/1583350/item-image.jpg"></img>
            </div>
          </div>

          {/* <div className="courseItems">
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
          </div> */}
        </div>
      </>
    );
  }
};

export default Courses;
