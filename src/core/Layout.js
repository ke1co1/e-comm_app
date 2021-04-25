import React from "react";
import Menu from "./Menu";

function Layout({ title, description, children, className }) {
  return (
    <div>
      <Menu />
      <div className="bg-light p-5">
        <h2>{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
}

export default Layout;
