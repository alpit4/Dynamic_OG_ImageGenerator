import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import PostPage from "./PostPage";
import "./App.css";
import "./PostPage.css";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/post" element={<PostPage />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
