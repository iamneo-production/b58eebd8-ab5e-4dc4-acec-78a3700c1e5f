import React from 'react';
import { Link } from 'react-router-dom';
import './resource.css';

const Resource = () =>{
    return(
      <div>
    <nav className="navigation">
            <button aria-label="Close navigation" className="close-nav">×</button>
            <ul className="nav-list">
              <Link to="/Home"><li  style={{color: 'white',fontSize: '20px'}}className="nav-item">  Home</li></Link>&nbsp;&nbsp;
              <Link to="/stock"><li  style={{color: 'white',fontSize: '20px'}}className="nav-item">   View Stocks</li></Link>&nbsp;&nbsp;

              <Link to="/data"><li  style={{color: 'white',fontSize: '20px'}}className="nav-item"> Add Stock</li></Link>&nbsp;&nbsp;

              <Link to="/about"><li style={{color: 'white',fontSize: '20px'}}className="nav-item">  About</li></Link>&nbsp;&nbsp;
              <Link to="/contact"><li style={{color: 'white',fontSize: '20px'}}className="nav-item">  Contact</li></Link>

            </ul>
          </nav>

      <br>
      </br>
      <div className='resource'>
      
      <div className="container">
      <div className="card" style={{color: 'black'}}>
        <div className="img-box">
          <img src="https://5.imimg.com/data5/SELLER/Default/2022/9/TJ/AY/OV/26620286/inventory-management-software-500x500.png" />
        </div>
        <div className="content">
          <h2>Inventory Tracking</h2>
        
          <p style={{fontSize: '90%'}}>
           Enables businesses to track inventory levels in
real-time. It provides visibility into the quantity and location of each item in
stock, allowing users to monitor stock levels accurately and make informed
decisions regarding replenishment or reordering.
          </p>
          
        </div>
      </div>
      <div className="card" style={{color: 'black'}}>
        <div className="img-box">
          <img src="https://www.pngitem.com/pimgs/m/252-2523878_sales-order-management-order-management-hd-png-download.png" />
        </div>
        <div className="content">
          <h2>Order Management</h2>
          <p style={{fontSize: '90%'}}>
          Facilitates order processing and fulfilment.
Users can receive and manage purchase orders, sales orders, and transfer orders
within the portal. It tracks the status of orders, updates stock levels accordingly,
and provides visibility into order history
          </p>
          
        </div>
      </div>
      <div className="card" style={{color: 'black'}}>
        <div className="img-box">
          <img src="https://www.netsolutions.com/insights/wp-content/uploads/2023/03/product-information-management-PIM-software.webp" />
        </div>
        <div className="content">
          <h2>Product Information Management</h2>
          <p style={{fontSize: '90%'}}>
          Stores and manages detailed
product information, including descriptions, SKUs (stock keeping units), prices,
supplier details, and other relevant attributes. This information helps users
quickly identify and locate specific products within the inventory
          </p>
          
        </div>

      </div>
      <div className="card" style={{color: 'black'}}>
        <div className="img-box">
          <img src="https://inventrax.com/wp-content/uploads/2019/06/WM-Overview.png" />
        </div>
        <div className="content">
          <h2>Warehouse Management</h2>
          <p style={{fontSize: '90%'}}>
          Records and tracks
stock movements, such as receiving new inventory, transferring stock between
locations, or fulfilling customer orders. It supports the management of multiple
warehouses or storage locations, allowing users to track stock by location and
optimize inventory allocation.
          </p>
          
        </div>
      </div>
      <div className="card" style={{color: 'black'}}>
        <div className="img-box">
          <img src="https://miro.medium.com/v2/resize:fit:500/1*yvWl-piJFYSzkvOigeip-g.png" />
        </div>
        <div className="content">
          <h2>Reorder Management</h2>
          <p style={{fontSize: '90%'}}>
          Includes features to help businesses manage
their reorder process efficiently. It sets reorder points and generates alerts or
notifications when inventory levels fall below the specified thresholds.
          </p>
          
        </div>
      </div>
    </div>
       
      </div>
      </div>
      
    );
}
export default Resource;