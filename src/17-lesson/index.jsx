import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Gallery from "./components/gallery";
import Login from "./components/login";
import NotFound from "./components/notFound";
import Header from "./components/header";
import ForHistory from "./components/forHistory";
import User from "./components/user";

const RouterDOM = () => {
  return (
    <Router>
      <Header />
      <ForHistory />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/login" component={Login} />
        <Route path="/user/:id" component={User} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default RouterDOM;
