import React from "react";
import { API } from "../config";

function ShowImage({ item, url }) {
  return (
    <div style={{ minHeight: "100px" }}>
      <img
        src={`${API}/${url}/photo/${item._id}`}
        alt={item.name}
        className="mb-3"
        style={{ maxHeight: "200px", maxWidth: "400px" }}
      />
    </div>
  );
}

export default ShowImage;
