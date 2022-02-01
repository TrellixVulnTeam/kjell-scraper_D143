import "./App.scss";
import React, { useState } from "react";
import { trackPromise } from "react-promise-tracker";
import { LoadingIndicator } from "./components/Loader";
import ProductBox from "./components/Product-box/ProductBox";


export default function App() {
  // Create states
  const [products, setProducts] = useState([]);
  const [string, setString] = useState("");

  /**
   * A function for accessing the backend webscraper and getting the product info for the string
   * @param {*} e the button element for preventing reload
   */
  function getProducts(e) {
    // Empty the old products to make place for the new ones
    setProducts([]);
    // Prevent reload
    e.preventDefault();
    // Track the loading
    trackPromise(
      // Get the products from the string enterd
      fetch("/api/get_products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ string: string }),
      }).then((response) =>
        response.json().then((data) => {
          // Set the products for show to the data response from flask
          setProducts(data);
        })
      )
    );
  }

  return (
    <div className="main-page">
      <div className="input_form">
        <form>
          <input
            id="input_field"
            type="text"
            placeholder="Ange artikelsträng"
            onChange={(e) => setString(e.target.value)}
          />
          <button
            id="input-button"
            type="simpleQuery"
            onClick={(e) => {
              getProducts(e);
            }}
          >
            Ange
          </button>
        </form>
      </div>
      <div className="main">
        <LoadingIndicator />
        <ProductBox products={products} />
      </div>
    </div>
  )
}


