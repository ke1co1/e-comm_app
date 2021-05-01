import React, { useState, useEffect } from "react";
import { getCategories, list } from "./apiCore";
import Card from "./Card";

function Search() {
  //state values
  const [data, setData] = useState({
    categories: [],
    category: "",
    search: "",
    results: [],
    searched: false,
  });

  //destructure values from state
  const { categories, category, search, results, searched } = data;

  // load all categories and set them in [] state
  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setData({ ...data, categories: data });
      }
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const searchData = () => {
    if (search) {
      list({ search: search || undefined, category }).then((response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          setData({ ...data, results: response, search: true });
        }
      });
    }
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    //get the search and category from the state
    searchData();
  };

  //HOF //function returning another function
  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value, searched: false });
  };

  const searchForm = () => (
    <form onSubmit={searchSubmit}>
      <span className="row input-group-text">
        <div className="col-2">
          <div className="input-group-prepend">
            <select className="btn mr-2" onChange={handleChange("category")}>
              <option value="All">Pick Category</option>
              {categories.map((c, i) => (
                <option key={i} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <input
          type="search"
          className="form-control col"
          onChange={handleChange("search")}
          placeholder="search by name"
        />
        <div className="btn input-group-append col" style={{ border: "none" }}>
          <button className="input-group-text">Search</button>
        </div>
      </span>
    </form>
  );

  return (
    <div className="row mx-4">
      <div className="container mb-4">{searchForm()}</div>
    </div>
  );
}

export default Search;
