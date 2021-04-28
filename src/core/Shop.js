import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getCategories } from "./apiCore";
import Checkbox from "./Checkbox";

function Shop() {
  const [categories, setCategories] = useState([]);
  const [data, setError] = useState([]);

  //load categories and set the form data
  const init = () => {
    getCategories().then((data) => {
      console.log("Here are the categories,", data);
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Layout
      title="Shop Page"
      description="Search and find books of your choice"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-4">
          <h4>Filter by categories</h4>
          <ul>
            <Checkbox categories={categories} />
          </ul>
        </div>
        <div className="col-8">right side</div>
      </div>
    </Layout>
  );
}

export default Shop;
