import React, { useState, useEffect } from "react";

function Checkbox({ categories, handleFilters }) {
  const [checked, setChecked] = useState([]);

  //higher order function
  //takes in the id param from on change then runs our push or splice functions to set the state
  const handleToggle = (c) => () => {
    const currentCategoryId = checked.indexOf(c);
    const newCheckedCategoryId = [...checked];
    //if id is not already checked push it in the state array
    if (currentCategoryId === -1) {
      newCheckedCategoryId.push(c);
      //if id is already in the array then remove is
    } else {
      newCheckedCategoryId.splice(currentCategoryId, 1);
    }

    setChecked(newCheckedCategoryId);
    handleFilters(newCheckedCategoryId); //sends up to parent
  };

  return categories.map((c, i) => (
    <li key={i} className="list-unstyled">
      {/* in the input we pass the id back to the HOF */}
      <input
        onChange={handleToggle(c._id)}
        value={checked.indexOf(c._id)} // might need to add back the === -1
        type="checkbox"
        className="form-check-input me-2 me-1"
      />
      <label className="form-check-label">{c.name}</label>
    </li>
  ));
}

export default Checkbox;
