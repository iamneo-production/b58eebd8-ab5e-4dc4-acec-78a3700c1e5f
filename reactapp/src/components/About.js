import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

const About = () =>{
    return(
      <div className='abt'>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
      <header className="header main-grid">
        <div className="header-content">
          
          <button aria-label="Open navigation" className="open-nav">☰</button>
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
        </div>
      </header>
      <main className="main-grid">
        <div className="head">
          <h1 className="page-title">About us</h1><br></br>
          <p className="subtitle">Megaventory is a cloud based software for Inventory, Sales and Manufacturing management.<br>
          </br> We help Indian small and medium businesses to keep accurate inventory stock, control sales and purchase processes.</p>
        </div><br></br><br></br>
        <img style={{marginRight: '50%'}}className="main-image" src="https://www.kindpng.com/picc/m/567-5674919_inventory-management-inventory-management-system-png-transparent-png.png" alt="two men in a coworking space" />
        <div className="main-text">
          <h2 className="section-title">For Manufacturers</h2><br></br>
          <p>Take production under control starting from planning, stocktaking, raw materials transfers, packaging and finishing with sales of ready-to-use goods.<br></br>
<br></br><i>
               Organize production stages<br></br>
               Manage inventory for production<br></br>
               Calculate the cost of the goods produced<br></br>
               Sell and purchase goods<br></br>
               Control finances</i></p>
          <h2 className="section-title sub">Ideal for a Small workshop or a production facility</h2><br></br>
<p>A multifunctional and easy-to-handle solution for those entrepreneurs <br></br>
  who seek more convenient ways of managing the production process rather than Excel sheets with remaining goods lists,<br></br> 
  bills of materials, and production order graphs.</p>        </div>
      </main>
      <footer className="footer main-grid">
        <div className="footer-text"><center>
          
          <p style={{marginRight: '20%'}}className="end">© copyright2002-2023</p><br></br>
          </center>
        </div>
        <div className="social">
          <a href="#" className="facebook icon"><i className="fab fa-facebook-f" /></a>
          <a href="#" className="twitter icon"><i className="fab fa-twitter" /></a>
          <a href="#" className="instagram icon"><i className="fab fa-instagram" /></a>
        </div>
      </footer>
    </div>
      
    );
}
export default About;

