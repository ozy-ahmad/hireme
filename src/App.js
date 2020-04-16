import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./components/portfolio/Portfolio";
import Article from "./components/article/Article";
import Hireme from "./components/hireme/Hireme";
import Navbars from "./components/navbars/Navbars";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navbars />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/portfolio" component={Portfolio}></Route>
        <Route path="/article" component={Article}></Route>
        <Route path="/hireme" component={Hireme}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
