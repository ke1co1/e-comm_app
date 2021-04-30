import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";

function Card({ product }) {
  return (
    <div className="col-4 mb-3">
      <div className="card">
        <div className="card-header">{product.name}</div>
        <div className="card-body">
          <ShowImage item={product} url="products" />
          <p>{product.description.substring(0, 50)}</p>
          <p>${product.price}</p>
          <Link to="/">
            <button className="btn btn-outline-primary m-2">
              View Product
            </button>
          </Link>
          <button className="btn btn-outline-warning">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
