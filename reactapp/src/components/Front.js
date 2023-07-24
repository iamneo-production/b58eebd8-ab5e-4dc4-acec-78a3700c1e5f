
import React from 'react';
import { Link} from 'react-router-dom';
import './front.css';

const Front = () =>{
    return(
      <div className='agal'>
<div className="hero--row">
        <div className="hero--wrapper">
        <img style={{marginLeft: '300px',marginTop: '50px'}}src="https://cdn-icons-png.flaticon.com/128/3045/3045541.png"/>
        <br></br>
          <h1 style={{color: ' black'}}> Inventory Management</h1>
          <div className='front'>
          <p>Inventory management helps companies identify which and how much stock to order at what time.
             It tracks inventory from purchase to the sale of goods.<br></br><br></br>
              The practice identifies and responds to trends to ensure there's always enough stock to fulfill customer orders and proper warning of a shortage.</p><br></br>
          <p>The goal of Inventory management is to have the right products in the right place at the right time.</p>
          <br></br><br></br>
          <div id="hero--buttons">
            <Link to="/login"><button id="finance-btn">Login</button></Link>
            <Link to="/signup"><button id="refer-btn">Signup</button></Link>
            </div>
            </div>
          </div>
        </div>
      </div>

       
      
    );
}
export default Front;
