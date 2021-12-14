import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import NavbarComp from './CustNav';


function App() {
  
  return (
    <>
      
      <NavbarComp/>

      <div>
        <h1>Welcome to Seattle Crime Dashboard!</h1></div>

      
    </>
  );
}

export default App;