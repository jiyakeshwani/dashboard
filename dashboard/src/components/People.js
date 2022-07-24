import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function People() {
  return (
    <>
      <Header />
      <section className="flex">
        <Sidebar />
        <div className="main">
          <h6>People</h6>
        </div>
      </section>
    </>
  );
}

export default People;
