import { Component } from "react";
import { Product } from "./Products";

class ProductBox extends Component {
  constructor(props) {
    super(props);
    this.products = props.products;
  }

  render() {
    return (
      <div className="contianer">
        {this.products.map((product) => {
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
  }
}

export default ProductBox;