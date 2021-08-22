import React, { useState } from "react";
import { Product } from "./Products";
import CopyButton from "./CopyButton";
import "./Products.scss";

const ProductBox = ({ products }) => {
  //The list of products that are selected
  const [checkedArticles, setCheckedArticles] = useState([]);
  const [showCopyButton, setShowCopyButton] = useState(false);

  /**
   * A function for making a list of all the products that is checked
   * @param {boolean} isChecked The value if the button is checked
   * @param {string} article_number The article number of the product
   */
  function setCheckedState(isChecked, article_number) {
    if (isChecked) {
      checkedArticles.push(article_number);
    } else {
      checkedArticles.splice(checkedArticles.indexOf(article_number), 1);
    }
    if (checkedArticles.length > 0){
      setShowCopyButton(true)
    }else{
      setShowCopyButton(false)
    }
  }

  return (
    <div className="contianer">
      {products.map((product) => {
        return (
          <div>
            {checkedArticles.map((item) => {
              <h1>{item}</h1>;
            })}
            <Product
              onChange={setCheckedState}
              name={product.name}
              link={product.link}
              article_number={product.article_number}
              price={product.price}
            />
          </div>
        );
      })}
      {showCopyButton && <CopyButton articleList={checkedArticles} />}
    </div>
  );
};

export default ProductBox;
