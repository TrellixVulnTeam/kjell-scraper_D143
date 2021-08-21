import React from "react";
import "./Products.scss";

export const Product  =({name, link, article_number, price}) =>{
  return(
    <div className="product">
      <div className="heading">
        <h1>{name}</h1>
        <img src={link} />
      </div>
      <div className="content">
        <p>Artnr: {article_number}</p>
        <p id="price">{price}:-</p>
      </div>
    </div>
  );
}

export const Products = ({ products }) => {
  return (
    <div className="contianer">
      {products.map((product) => {
        return (
          <Product name={product.name} link={product.link} article_number={product.article_number} price={product.price}/>
        );
      })}
    </div>
  );
};
