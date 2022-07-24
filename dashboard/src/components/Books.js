import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Books() {
  return (
    <>
      <Header />
      <section className="flex">
        <Sidebar />
        <div className="main">
          <h6>Books</h6>
        </div>
      </section>
    </>
  );
}

export default Books;
