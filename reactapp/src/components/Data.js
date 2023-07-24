import React from 'react';
import { Link } from 'react-router-dom';

import './data.css';

const Data = () =>{
    return(
      <div>
      <nav className="navigation">
      <button aria-label="Close navigation" className="close-nav">×</button>
      <ul className="nav-list">
        <Link to="/Home"><li  style={{color: 'white',fontSize: '20px'}}className="nav-item">  Home</li></Link>&nbsp;&nbsp;
        <Link to="/stock"><li  style={{color: 'white',fontSize: '20px'}}className="nav-item">   View Stocks</li></Link>&nbsp;&nbsp;
        <Link to="/data"><li  style={{color: 'white',fontSize: '20px'}}className="nav-item"> Add Stock</li></Link>&nbsp;&nbsp;

        <Link to="/resource"><li style={{color: 'white',fontSize: '20px'}}className="nav-item">  Resources</li></Link>&nbsp;&nbsp;

        <Link to="/Contact"><li style={{color: 'white',fontSize: '20px'}}className="nav-item">  Contact</li></Link>

      </ul>
    </nav>
 
        
        <div  className='ddd'>
        <center>
      <div className='data'>
      <main id="ma">
      <header id="header">
      <img style={{marginRight: '400px',marginLeft: '330px',marginBottom:'50px',width : '10%'}}src="https://cdn-icons-png.flaticon.com/128/11161/11161962.png"/>    
        <h1 id="title">Manage Your Stock
        </h1>
        <p id="description">The Process Ensuring the right amount of supply is available in Organization.</p>
      </header>
      <form action method name id="survey-form">
        <div className="form-group">
          <label id="name-label" htmlFor="name">Product Id:</label>
          <input id="name" type="text" name="name" placeholder="Enter ProductId" className="input-area" required />
        </div>
        <div className="form-group">
          <label id="email-label" htmlFor="email">Product Name:</label>
          <input id="name" type="text" name="email" placeholder="Enter ProductName" className="input-area" required />
        </div>
        <div className="form-group">
          <label id="number-label" htmlFor="number">Product Stock:</label>
          <input id="number" type="text" name="number" placeholder="Product Stock"  className="input-area" required />
        </div>
        <div className="form-group">
          <label id="number-label" htmlFor="number">Quantity Used:</label>
          <input id="number" type="text" name="number" placeholder="QtyUsed"  className="input-area" required />
        </div>
       
        <div className="form-group">
          <label id="number-label" htmlFor="text">Product Price:</label>
          <input id="number" type="text" name="number" placeholder="EnterPrice"  className="input-area" required />
        </div>

       
        <div className="form-group">
          <label id="email-label" htmlFor="email">Availability:</label>
          <input id="name" type="text" name="email" placeholder="EnterAvailability" className="input-area" required />
        </div>
        <div className="form-group">
          <label id="email-label" htmlFor="email">Product Img:</label>
          <input id="name" type="text" name="email" placeholder="Img Link" className="input-area" required />
        </div>
        
        
        
        
        {/* Submit */}
        <div className="form-group">
          <center>
         <Link to="/Stock"><input type="submit" defaultValue="Submit" id="submit" /></Link></center> 
        
         
        </div>
      </form>
     
      
    </main>
    </div>
    </center>
    </div>
    </div>
  
          );
        }
    
export default Data;