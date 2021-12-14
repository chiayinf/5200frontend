import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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