import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {

  state = {
    onOpen: false,
  };

  openMenu() {
    this.setState({
      onOpen: !this.state.onOpen,
    });
  }
  closeMenu() {
    this.setState({
      onOpen: false,
    });
  }
  NameOnCLick() {
    this.props.history.push("/")
  }
  render() {
    let boxClass = ["sideBar"];
    if (this.state.onOpen) {
      boxClass.push("open");
    }
    return (
      <div className='gridContainer'>
        <header className='header'>
          <div className='brand'>
            <button onClick={() => this.openMenu()}>&#9776;</button>
            <h4 onClick={()=>this.NameOnCLick()}>Oddu.com</h4>
          </div>
          <div className='headerName'>
            <span>Cart</span> 
            <span>Sign In</span>
          </div>
        </header>
        <aside className={boxClass.join(" ")}>
          <h3>SHOP BY CATEGORY</h3>
          <span onClick={() => this.closeMenu()}>&times;</span>
          <ul>
            <li>Mobile</li>
            <li>HeadPhone</li>
            <li>WebCamera</li>
            <li>Televesion</li>
            <li>Hardwares</li>
            <li>HomeTheatre</li>
            <li>Laptop</li>
            <li>Apple Store</li>
            <li>Redmii Store</li>
            <li>Camera</li>
            <li>Car Appliances</li>
            <li>Bike Appliances</li>
          </ul>
        </aside>
      </div>
    );
  }
}
export default Navbar;
