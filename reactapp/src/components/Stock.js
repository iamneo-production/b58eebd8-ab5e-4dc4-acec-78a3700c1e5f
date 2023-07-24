import React from 'react';
import { Link } from 'react-router-dom';

import './stock.css';

const Stock = () =>{
    return(
      <div className="whole">
         <div>
    <nav className="navigation">
            <button aria-label="Close navigation" className="close-nav">×</button>
            <ul className="nav-list">
              <Link to="/Home"><li  style={{color: 'white',fontSize: '20px'}}className="nav-item">  Home</li></Link>&nbsp;&nbsp;

              <Link to="/data"><li  style={{color: 'white',fontSize: '20px'}}className="nav-item"> Add Stock</li></Link>&nbsp;&nbsp;
              <Link to="/resource"><li  style={{color: 'white',fontSize: '20px'}}className="nav-item">  Resources</li></Link>&nbsp;&nbsp;


              <Link to="/about"><li style={{color: 'white',fontSize: '20px'}}className="nav-item">  About</li></Link>&nbsp;&nbsp;
              <Link to="/contact"><li style={{color: 'white',fontSize: '20px'}}className="nav-item">  Contact</li></Link>

            </ul>
          </nav>

<div className="cont">  
        <section className="pattern-description">
        <img style={{marginRight: '600px',marginLeft: '700px',width: '100px',alignItems: 'center'}}src="https://cdn-icons-png.flaticon.com/128/10112/10112484.png"/><br></br>

          <center><h2 style={{color: 'black'}}> Stock Availability Field</h2>
          <img style={{marginRight: '230px',marginLeft: '200px',width: '50px'}}src="https://cdn-icons-png.flaticon.com/128/9638/9638986.png"/>

          <h3 style={{fontSize: '15px'}}> Inventory Clearly Visible</h3>
          <img style={{marginRight: '230px',marginLeft: '200px',width: '50px'}}src="https://cdn-icons-png.flaticon.com/128/3201/3201472.png"/>
          <h3  style={{fontSize: '15px'}}>Always Accurate Stock</h3>
          <img style={{marginRight: '230px',marginLeft: '200px',width: '50px'}}src="https://t4.ftcdn.net/jpg/02/77/30/49/240_F_277304950_m2UpW5QJmsTNDoEylhBmG3rljuBtYUGA.jpg"/>
          <h3 style={{fontSize: '15px'}}>Anywhere 24/7</h3>

</center>
<br></br>
       
        </section>
        
        <center>
      <table style={{fontSize: '20px',backgroundColor: 'white'}}className="dataTable">
        <thead>
          <tr>
            <th style={{backgroundColor: '#594f8d'}}>Product Id</th>
            <th style={{backgroundColor: '#594f8d'}}>Product Name</th>
            <th style={{backgroundColor: '#594f8d'}}>Qty Planned</th>
            <th style={{backgroundColor: '#594f8d'}}>Date</th>
            <th style={{backgroundColor: '#594f8d'}}>Price</th>
            <th style={{backgroundColor: '#594f8d'}}>Qty Used</th>
            <th style={{backgroundColor: '#594f8d'}}>Order Count</th>
            <th style={{backgroundColor: '#594f8d'}}>Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="#">000000001</a></td>
            <td>Dr. Jayhawk</td>
            <td>102</td>
            <td>03/30/1940</td>
            <td>$60.42</td>
            <td>84</td>
            <td>
              12
            </td>
            <td>Available</td>
          </tr>
          <tr>
            <td><a href="#">000000002</a></td>
            <td>Dr. Jayhawk</td>
            <td>137</td>
            <td>03/18/1953</td>
            <td>$69.68</td>
            <td>30</td>
           
            <td>
              5
            </td>
            <td>Available</td>
          </tr>
          <tr>
            <td><a href="#">000000003</a></td>
            <td>Dr. Wolverine Longer Text Test</td>
            <td>49</td>
            <td>03/29/1976</td>
            <td>$86.68</td>
            <td>49</td>
            <td>17
            </td>
            <td>Out of the Stock</td>
          </tr>
          <tr>
            <td><a href="#">000000004</a></td>
            <td>Dr. Tarheel</td>
            <td>113</td>
            <td>03/30/1981</td>
            <td>$63.50</td>
            <td>110</td>
            <td> 30  </td>
            <td>Only 3 Left</td>
          </tr>
          <tr>
            <td><a href="#">000000005</a></td>
            <td>Dr. Orange</td>
            <td>147</td>
            <td>03/30/1987</td>
            <td>$74.73</td>
            <td>67</td>
            <td>8            </td>
            <td>Available</td>
          </tr>
          <tr>
            <td><a href="#">000000006</a></td>
            <td>Dr. Who</td>
            <td>298</td>
            <td>04/08/2013</td>
            <td>$45.00</td>
            <td>43</td>
            <td>21            </td>
            <td>Available</td>
          </tr>
        </tbody>
        
      </table>
     
      </center>
      <br></br>
<br>
</br>      
  <footer style={{backgroundColor: '#594f8d'}}role="contentinfo">   
          <div>
            <nav id="menu">
            <img style={{marginRight: '600px',marginLeft: '700px',width: '60px'}}src="https://cdn-icons-png.flaticon.com/128/9252/9252076.png"/>

              <center>
            <h3 style={{fontSize: '15px'}}>
            MegaVentory Pvt. Ltd.<br></br>

            CIN U72900MH2022FTC395486<br></br>
               Chennai, India

</h3>
              <a href="#" style={{fontSize: '15px'}} >sales@MegaVentory.in</a>
              </center>
            </nav>
          </div>
        </footer>
      </div>
    </div>
    </div>
          );
        }
    
export default Stock;