import React from "react";
import "./Product.scss";

export const Products = ({ products }) => {
  return (
    <div className="contianer">
      {products.map((product) => {
        return (
          <div className="product">
            <div className="heading">
              <h1>{product.name}</h1>
              <img src={product.link} />
            </div>
            <div className="content">
              <p>Artnr: {product.article_number}</p>
              <p id="price">{product.price}:-</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
