import React, { Fragment, useState } from "react";
// import "./App.css";
import "./styles.css";
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'

//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {

  const [darkMode, setDarkMode] = useState(true);
  return (
    <Fragment>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="container">
          <Navbar collapseOnSelect expand="lg" bg={darkMode ? "dark" : "light"} variant="light">
            <Navbar.Brand href="/" style={darkMode? {color: '#9d9d9d'} : {color: 'black'}}>TO-DO-LIST</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className="ml-auto">
              <label className="switch">
                <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                <span className="slider round"> </span>
              </label>
            </Nav>  
          </Navbar>
          <InputTodo />
          <ListTodos />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
