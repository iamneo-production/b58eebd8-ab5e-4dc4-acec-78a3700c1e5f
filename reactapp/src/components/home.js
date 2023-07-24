import React from 'react';
import { Link} from 'react-router-dom';
import './home.css';
const Home = () =>{
    return(

     
            <div className="wrapper">
            <div style={{color: ' white'}}className="sidebar">
              <h4><i>InVentory!</i></h4>
              <ul>
                <Link to="/Home"><li><a href="#"><i className="fas fa-home" />Home</a></li></Link>
                <Link to="/Report"><li><a href="#"><i className="fas fa-project-diagram" />Report Orders</a></li></Link>
                <Link to="/Resource"><li><a href="#"><i className="fas fa-blog" />Resources</a></li></Link>
                <Link to="/Data"><li><a href="#"><i className="fas fa-address-card" />Start Inventory</a></li></Link>
                <Link to="/Stock"><li><a href="#"><i className="fas fa-address-book" />Stocks</a></li></Link>
                <Link to="/Contact"><li><a href="#"><i className="fas fa-map-pin" />Contact</a></li></Link>
                <Link to="/fb"><li><a href="#"><i className="fas fa-map-pin" />Feedback</a></li></Link>

              </ul> 
            
            </div>
            <div className="main_content">
              <div style={{color: 'white',backgroundColor: 'black'}}className="header">You can automatically update inventory levels and share with stakeholders!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
<Link to="/About"><button>About</button></Link>&nbsp;&nbsp;<Link to="/contact"><button>Contact</button></Link>&nbsp;&nbsp;
              <Link to="/login"><button>Logout</button></Link></div> 
      
              <br>
              </br>
              
              <div>
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
              <div className="main">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <ul className="cards">
                  <li className="cards_item">
                    <div className="card">
                      <div className="card_image"><img style={{height: '100%',width: '100%'}}src="https://blog.hubspot.com/hs-fs/hubfs/Median%20OTE%20for%20Sales%20Careers-1.jpg?width=1024&name=Median%20OTE%20for%20Sales%20Careers-1.jpg" /></div>
                      <div className="card_content">
                        <h2 className="card_title">Sales</h2>
                        <p style={{color: 'black'}}className="card_text">Automatically update your stock levels and forecast quantities based on quotations and sales orders.</p>
                        <Link to="/Data"><button className="btn card_btn">Start Inventory</button></Link>
                      </div>
                    </div>
                  </li>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li className="cards_item">
                    <div className="card">
                      <div className="card_image"><img style={{height: '100%',width: '90%'}} src="https://adynamics.com.my/wp-content/uploads/2022/05/what-is-inventory.png" /></div>
                      <div className="card_content">
                        <h2 className="card_title"> Stock Maintenance</h2>
                        <p style={{color: 'black'}}className="card_text">Plan preventive maintenance and act quickly to correct and fix problems.</p>
                        <Link to="/stock"><button className="btn card_btn">View Stock</button></Link>
                      </div>
                    </div>
                  </li>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  
                 <br></br>
                 <li className="cards_item">
                    <div className="card">
                      <div className="card_image"><img style={{height: '100%',width: '100%'}} src="https://img.freepik.com/free-vector/factory-isometric-infographics-layout-illustrated-process-projection-design-assembly-accounting-packaging-distribution-packaging-storage-production-illustration_1284-60432.jpg?w=2000" /></div>
                      <div className="card_content">
                        <h2 className="card_title"><center>Restock Management</center></h2>
                        <p style={{color: 'black'}}className="card_text">Automate fulfillment to maintain correct inventory levels.</p>
                        <Link to="/Report"><button className="btn card_btn">Orders</button></Link>
                      </div>
                    </div>
                  </li>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li className="cards_item">
                    <div className="card">
                      <div className="card_image"><img style={{height: '100%',width: '100%'}}src="https://img.freepik.com/premium-vector/warehouse-workers-check-inventory-warehouse_530733-2940.jpg" /></div>
                      <div className="card_content"><br></br>
                      <br></br>
                      <br></br>
                        <h2 className="card_title">Resources</h2>
                        <p style={{color: 'black'}}className="card_text">Define quality control points and trigger quality alerts easily.</p>
                        <Link to="/Resource"><button className="btn card_btn">Discover</button></Link>
                      </div>
                    </div>
                  </li>
                  
                  
                </ul>
                <br></br><br></br>
          
                <footer style={{backgroundColor: 'white'}}role="contentinfo">   
          <div>
            <nav id="menu">
            <img style={{marginRight: '400px',marginLeft: '600px',width: '40px'}}src="https://cdn-icons-png.flaticon.com/128/9252/9252076.png"/>

              <center>
            <h3 style={{fontSize: '15px'}}>
            MegaVentory Pvt. Ltd.<br></br>

            CIN U72900MH2022FTC395486<br></br>
               Chennai, India

</h3><br></br>

              <a href="#" style={{fontSize: '15px'}} >sales@MegaVentory.in</a>
              </center>
            </nav>
          </div>
        </footer>
              </div>
            </div>
            </div>
          </div>
            
          
    
      
    );
}
export default Home;