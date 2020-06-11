import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css"; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';

const App = (props) => {
  return (
    <div className="backgroundColor">
      <Navbar history={props.history} />
      <Main />
      <Footer/>
    </div>
  )
}

export default withRouter(App);
