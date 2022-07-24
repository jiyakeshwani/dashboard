import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function SingleArticle(props) {
  return (
    <>
      <Header />
      <section className="flex">
        <Sidebar />
        <div className="main">
          <NavLink to="/articles">
            <p>👈Go Back to articles</p>
          </NavLink>
          <h5>The slug of the article is::: {props.match.params.slug}</h5>
        </div>
      </section>
    </>
  );
}

export default SingleArticle;
