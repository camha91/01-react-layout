import React, { Component } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";

export default class Home extends Component {
  render() {
    let style = {
      padding: 0,
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div style={style} className="col-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div style={style} className="col-4">
            <Navigation />
          </div>
          <div style={style} className="col-8">
            <Content />
          </div>
        </div>
        <div className="row">
          <div style={style} className="col-12">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
