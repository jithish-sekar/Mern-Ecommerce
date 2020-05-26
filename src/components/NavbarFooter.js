import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from '../logo.svg'

class Navbar extends Component {
  product() {
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="gridContainer">
        <header className="header">amazon</header>
        <main className="main">
          <ul>
            <li>Product1</li>
            <li>Product2</li>
            <li>Product3</li>
            <li>Product4</li>
            <li>Product5</li>
            <li>Product6</li>
          </ul>
        </main>
        <footer className="footer">&#169; 2020 copyright:amazon.org.in</footer>
      </div>
    );
  }
}
export default Navbar;
