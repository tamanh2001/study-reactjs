import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import BookFeature from "./features/Book";
import BookList from "./features/Book/components/BookList";

function App() {
  return (
    <div className="App">
      <BookFeature />
      <h1>Hello World</h1>
      <p>
        <NavLink to="/">Home</NavLink>
      </p>
      <p>
        <NavLink to="/books">Books</NavLink>
      </p>
      <Route path="/" component={BookFeature} exact />
      <Route path="/books" component={BookList} exact />
    </div>
  );
}

export default App;
