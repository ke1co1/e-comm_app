import React from "react";
import Menu from "./Menu";
import "../styles.css";

function Layout({ title, description, children, className }) {
  return (
    <div>
      <Menu />
      <div className="jumbotron mb-3">
        <h2>{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
}

export default Layout;
