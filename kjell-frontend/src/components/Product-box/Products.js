import { useEffect, useState, useContext } from "react";
import { v4 } from "uuid";
import "./Products.scss";
import Checkbox from "./Checkbox";
import { NotificationContext } from "../NotificationProvider";

export const Product = ({ name, link, article_number, price, onChange }) => {
  // The value if the product is selected or not
  const [isSelected, setSelection] = useState(false);
  const dispacth = useContext(NotificationContext);

  // When the product is created check if its a No info card and notify if it is
  useEffect(() => {
    if (name == "No Info") {
      dispacth({
        type: "ADD_NOTIFICATION",
        payload: {
          id: v4(),
          type: "",
          message: "Felaktig input upptäckt",
        },
      });
    }
  }, []);

  return (
    <div className="product">
      <div className="heading">
        <Checkbox
          className="checkbox"
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
        <p className="art-title">Artnr: </p><p className="art-num">{article_number}</p>
        <p className="price">{Math.floor(price) == price && price + ":-" || price + "0"}</p>
      </div>
    </div>
  );
};
