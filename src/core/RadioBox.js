import React, { useState, Fragment } from "react";

function RadioBox({ prices, handleFilters }) {
  const [value, setValue] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
    handleFilters(e.target.value);
  };

  return prices.map((p, i) => (
    <div key={i}>
      {/* in the input we pass the id back to the HOF */}
      <input
        onChange={handleChange}
        value={`${p._id}`} // might need to add back the === -1
        name={p} // must include to switch off radio
        type="radio"
        className="me-2 me-1"
      />
      <label className="form-check-label">{p.name}</label>
    </div>
  ));
}

export default RadioBox;
