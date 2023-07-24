import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './api';
import { Link } from 'react-router-dom';

const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundImage:'url("https://media.istockphoto.com/id/1434437996/photo/woman-hand-writing-on-clipboard-with-a-pen.webp?b=1&s=170667a&w=0&k=20&c=Y1iu_5VJGZK8yZIzwIJKA7Wo89TAndwqCQLa1cxcJf4=")',
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
    },
    login: {
      width: '400px',
      padding: '40px',
     
      borderRadius: '4px',
     
      marginLeft:'500px'
     
    },
    
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontSize: '16px',
      fontWeight: 'bold',
      color:'#594f8d'
    
  
    },
    input: {
      width: '100%',
      height:'50%',
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    button: {
      width: '30%',
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#594f8d',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginLeft:'140px',
    },
   
  };

const FeedForm = () => {

const[formdata,setFormdata]= useState({
    email: '',
    name: '',
    subject: '',
    message: ''
   
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
    // console.log(formdata);
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await addFeedback(formdata);
      navigate('/home')
    }
    catch(error){
      console.log(error);
    }

    console.log(formdata);
  }
  
  
  


  return (
    <div>
    <nav className="navigation">
            <button aria-label="Close navigation" className="close-nav">×</button>
            <ul className="nav-list">
              <Link to="/Home"><li  style={{color: 'white',fontSize: '20px'}}className="nav-item">  Home</li></Link>&nbsp;&nbsp;
              <Link to="/stock"><li  style={{color: 'white',fontSize: '20px'}}className="nav-item">   View Stocks</li></Link>&nbsp;&nbsp;
              <Link to="/data"><li  style={{color: 'white',fontSize: '20px'}}className="nav-item"> Add Stock</li></Link>&nbsp;&nbsp;

              <Link to="/resource"><li style={{color: 'white',fontSize: '20px'}}className="nav-item">  Resources</li></Link>&nbsp;&nbsp;
              <Link to="/about"><li style={{color: 'white',fontSize: '20px'}}className="nav-item">  About</li></Link>&nbsp;&nbsp;


              <Link to="/Contact"><li style={{color: 'white',fontSize: '20px'}}className="nav-item">  Contact</li></Link>

            </ul>
          </nav>
         
    <div style={styles.container}>
      <div style={styles.login}>
      
    <center>
    <div className="down">
       
        <br></br>
      <div className="login-form">
        <h2 style={{color: 'black'}}>FEEDBACK</h2>
        <form onSubmit={handleSubmit} >
          <input
           style={{width:'100%',height: '80px'}}
            type="email"
            placeholder="Email"
            id='email'
            onChange={handleChange}
            required
          /><br></br>
          <br></br>
          <input
           style={{width:'100%',height: '80px'}}
            type="name"
            placeholder="Name"
            id='name'
            onChange={handleChange}
            required
          /><br></br>
          <br></br>
             <input
             style={{width:'100%',height: '80px'}}
            type="name"
            placeholder="Subject"
            id='subject'
            onChange={handleChange}
            required
          /><br></br>
          <br></br>
            <input
             style={{width:'100%',height: '80px'}}
            type="name"
            placeholder="Message"
            id='message'
            onChange={handleChange}
            required
          /><br></br>
          <br></br>
          <button type='submit' onChange={handleSubmit}>Submit</button>
          <div className="button">
         
        
          </div>
        </form>
      </div>
    </div>
    </center>
    </div>
    </div>
   
    </div>
  );
};

export default FeedForm;