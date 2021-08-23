import { useState } from "react";
import "./Products.scss";
import Checkbox from "./Checkbox";

export const Product = ({ name, link, article_number, price, onChange }) => {
  // The value if the product is selected or not
  const [isSelected, setSelection] = useState(false);

  return (
    <div className="product">
      <div className="heading">
        <Checkbox
          isSelected={isSelected}
          onClick={(value) => {
            setSelection(value);
            onChange(!isSelected, article_number);
          }}
        />
        <h1>{name}</h1>
        <img alt="product-img" src={link} />
      </div>
      <div className="content">
        <p>Artnr: {article_number}</p>
        <p id="price">{price}:-</p>
      </div>
    </div>
  );
};
