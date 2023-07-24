import React, { useState } from 'react';
import { Link} from 'react-router-dom';


const Report = () => {
        
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price) {
      const updatedProducts = [...products, { ...newProduct, id: Date.now() }];
      setProducts(updatedProducts);
      setNewProduct({ name: '', price: '' });
    }
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleUpdateProduct = (productId, updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, ...updatedProduct } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div>
    <nav className="navigation">
            <button aria-label="Close navigation" className="close-nav">×</button>
            <ul className="nav-list">
              <Link to="/Home"><li  style={{color: 'white',fontSize: '20px'}}className="nav-item">  Home</li></Link>&nbsp;&nbsp;
              <Link to="/stock"><li  style={{color: 'white',fontSize: '20px'}}className="nav-item">   View Stocks</li></Link>&nbsp;&nbsp;

              <Link to="/data"><li  style={{color: 'white',fontSize: '20px'}}className="nav-item"> Add stocks</li></Link>&nbsp;&nbsp;

              <Link to="/Contact"><li style={{color: 'white',fontSize: '20px'}}className="nav-item">  Contact</li></Link>&nbsp;&nbsp;
              <Link to="/resource"><li style={{color: 'white',fontSize: '20px'}}className="nav-item">  Resources</li></Link>

            </ul>
          </nav>
    <div className="container py-5"style = {{backgroundColor : 'gray', borderRadius:'10px',  fontColor:'black' , padding: '30px',width: '100%',height: '100vh'}}>
      <h1 className="text-center mb-4" style = {{color : 'black'}}>Restock Report</h1>

      <table className="table table-striped"><center style = {{backgroundColor : 'grey', padding: '.625em',color:'black', borderRadius:'3px', marginRight: '50px', marginLeft: '50px', marginBottom: '50px', marginTop: '50px',border: '20%' }}>
        <thead>
          <tr>
            <th> Product Id</th><br></br><br></br>
            <th>Product Name</th><br></br><br></br>
            <th>Quantity</th><br></br><br>
            
            </br>
            <th>Actions</th>
          </tr>
          <br></br>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td><br></br>
              <td>{product.name}</td><br></br>
              <td>${product.price}</td><br></br>
              <td>
                <button style={{width:'100%',height: '10%'}}className="btn btn-danger mr-2" onClick={() => handleDeleteProduct(product.id)}>
                  Delete
                </button><br></br>
                <button style={{width:'100%',height: '10%'}} className="btn btn-primary" onClick={() => handleUpdateProduct(product.id, { name: `Updated ${product.name}`, price: product.price + 10 })}>
                  Update
                </button><br></br>
              </td>
            </tr>
          ))}
        </tbody></center>
      </table>

      <h2 className="mt-4" style = {{color : 'black'}}>Add Product</h2>

      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="nameInput" style = {{color : 'black',width: '30%'}}>Product Name:</label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="priceInput" style = {{color : 'black'}}>Quantity:</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" style = {{fontSize: '50%',color : 'black'}}></span>
              </div>
              
              <input
                type="text"
                className="form-control"
                id="priceInput"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
              />
              <br></br>
              <br></br>
              <br></br>
               <button style={{width:'100%'}} className="btn btn-success" onClick={handleAddProduct}>
       Send  Order 
      </button>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Report;