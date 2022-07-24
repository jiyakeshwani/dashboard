import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./components/App";
import Articles from "./components/Articles";
import Books from "./components/Books";
import Help from "./components/Help";
import People from "./components/People";
import SingleArticle from "./components/SingleArticle";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/articles">
        <Articles />
      </Route>
      <Route path="/books" exact>
        <Books />
      </Route>
      <Route path="/people" exact>
        <People />
      </Route>
      <Route path="/help" exact>
        <Help />
      </Route>
      <Route path="/articles/:slug" component={<SingleArticle />}></Route>
    </BrowserRouter>
  </React.StrictMode>
);
