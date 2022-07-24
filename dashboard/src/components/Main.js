import React from "react";
import People from "./People";
import Articles from "./Articles";
import Books from "./Books";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <h1> Welcome To Homepage!</h1>
      <div className="paths">
        {["articles", "books", "people"].map((path) => {
          return (
            <>
              <div className="path-box">
                <NavLink to={"/" + path}>
                  <p>{path.toUpperCase() + "PAGE"}</p>
                </NavLink>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
