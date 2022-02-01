import React, { useEffect, useState } from "react";
import { Product } from "./Products";
import CopyButton from "./CopyButton";
import "./Products.scss";

const ProductBox = (props) => {
  //The list of products that are selected
  const [checkedArticles, setCheckedArticles] = useState([]);
  const [showCopyButton, setShowCopyButton] = useState(false);
  const [showSpace, setShowSpace] = useState(false);

  /***
   * Function for selecting all products at the same time
   */
  function selectAll() {
    setCheckedArticles([]);
    props.products.map((product) => {
      checkedArticles.push(product.article_number);
    });
  }

  /**
   * A function for making a list of all the products that is checked,
   * it takes the boolean if the product is checked and then adds it to the list of checked buttons.
   * This function also handles if the copybutton should show or not
   * @param {boolean} isChecked The value if the button is checked
   * @param {string} article_number The article number of the product
   */
  function setCheckedState(isChecked, article_number) {
    // Add checked articles to list
    if (isChecked) {
      checkedArticles.push(article_number);
    } else {
      checkedArticles.splice(checkedArticles.indexOf(article_number), 1);
    }
    // Check if any articles are checked
    if (checkedArticles.length > 0) {
      setShowCopyButton(true);
      // Check if the list is long enough to need extra space
      if (props.products.length >= 6) {
        setShowSpace(true);
      }
    } else {
      setShowCopyButton(false);
      setShowSpace(false);
    }
  }

  // Set the checkedproducts and copybutton to default everytime the products prop is changed
  useEffect(() => {
    setCheckedArticles([]);
    setShowCopyButton(false);
    setShowSpace(false);
  }, [props.products]);

  return (
    <div className="contianer">
      {props.products.map((product) => {
        return (
          <div>
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
      {showSpace && <div className="spacer"></div>}
    </div>
  );
};

export default ProductBox;
