import currencyFormatter from "../utils/currencyFormatter";

import { useState, useEffect } from "react";
import ajoutItemCart from "../service/ajoutItemCart.js";
const Courses = (props) => {
  const { key, name, items, setCart, cart } = props;

  const onClickAddItem = (priceItem, idItem, libItem) => {
    let itemToAdd = {};
    itemToAdd.priceItem = priceItem;
    itemToAdd.idItem = idItem;
    itemToAdd.libItem = libItem;
    let result = [];
    result = ajoutItemCart(cart, itemToAdd);
    setCart(result);
  };
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
            {items.map((elem, index) => {
              return (
                <div
                  className="courseItem"
                  onClick={(e) => {
                    onClickAddItem(elem.price, elem.id, elem.title);
                  }}
                >
                  <div className="courseItemText">
                    <div className="courseItemTitle">{elem.title}</div>
                    <div className="courseItemDescription">
                      {elem.description}
                    </div>
                    <div className="prixCat">
                      <div className="courseItemZonePrix">
                        {currencyFormatter(elem.price)}
                      </div>
                      <div className>{elem.popular}</div>
                    </div>
                  </div>
                  {elem.picture ? <img src={elem.picture}></img> : <div></div>}
                </div>
              );
            })}
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
