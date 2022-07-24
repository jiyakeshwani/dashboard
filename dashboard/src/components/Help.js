import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Help() {
  return (
    <>
      <Header />
      <section className="flex">
        <Sidebar />
        <div className="main">
          <h6>Help</h6>
        </div>
      </section>
    </>
  );
}

export default Help;
