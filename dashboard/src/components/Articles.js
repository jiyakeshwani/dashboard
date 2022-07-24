import React from "react";
import data from "../data";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Articles() {
  return (
    <>
      <Header />
      <section className="flex">
        <Sidebar />
        <ul className="main">
          {data.map((article) => {
            return (
              <>
                <li>
                  <NavLink to={"/articles/" + article.slug}>
                    <h3>{article.title}</h3>
                  </NavLink>
                  <p className="para1">{article.author}</p>
                </li>
              </>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default Articles;
