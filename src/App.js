import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./components/portfolio/Portfolio";
import Article from "./components/article/Article";
import Hireme from "./components/hireme/Hireme";
import Navbars from "./components/navbars/Navbars";
import Footer from "./components/footer/Footer";

// import data from "../src/components/portfolio/Image";
import DetailArticle from "./components/article/detail/Detailarticle";

function App() {
  return (
    <Router>
      <Navbars />

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/portfolio" component={Portfolio}></Route>
        <Route exact path="/article" component={Article}></Route>
        <Route exact path="/article/:id" component={DetailArticle}></Route>
        <Route exact path="/hireme" component={Hireme}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
