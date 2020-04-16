import React, { Component } from "react";
// import Navbars from "../components/navbars/Navbars";
import Header from "../components/Home/Header";
import Skills from "../components/Home/Skills";
import Contactme from "../components/Home/Contactme";
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Skills />
        <Contactme />
      </div>
    );
  }
}
export default Home;
