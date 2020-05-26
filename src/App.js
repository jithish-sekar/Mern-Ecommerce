import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/NavbarFooter';
import Main from './components/Main';

const App = (props) => {
  return (
    <React.Fragment>
      <Navbar  history={props.history}/>
      <Main/>
    </React.Fragment>
  )
}

export default withRouter(App);
