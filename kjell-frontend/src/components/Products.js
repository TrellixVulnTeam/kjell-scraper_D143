import React, { useState } from "react";
import "./Products.scss";
import check_box from "./select_box.png";
import selected_check_box from "./select_box_checked.png";



export const Product = ({ name, link, article_number, price }) => {  

  const [isSelected, setSelection] = useState(false)

  function createSelection(selection) {
    if (selection) {
      setSelection(false);
    } else {
      setSelection(true);
    }
  }

  return (
    <div className="product">
      <div className="heading">
        <button
          onClick={(e) => {
            createSelection(isSelected);
          }}
        >
          {isSelected && <img src={selected_check_box} />}
          {!isSelected && <img src={check_box} />}
        </button>
        <h1>{name}</h1>
        <img src={link} />
      </div>
      <div className="content">
        <p>Artnr: {article_number}</p>
        <p id="price">{price}:-</p>
      </div>
    </div>
  );
};

export const Products = ({ products }) => {
  return (
    <div className="contianer">
      {products.map((product) => {
        return (
          <Product
            name={product.name}
            link={product.link}
            article_number={product.article_number}
            price={product.price}
          />
        );
      })}
    </div>
  );
};
