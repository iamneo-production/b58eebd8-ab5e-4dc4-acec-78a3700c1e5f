import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setEmail, setPass, setName } from './action';
import axios from 'axios';


const styles = {
  container: {
    display: 'flex',    backgroundImage:'url("https://media.istockphoto.com/id/1478771982/photo/blur-inventory-warehouse-products-goods-stock-factory-inventory-storage-area-for-background.jpg?s=612x612&w=0&k=20&c=eFgLkpzp_prkFLRO4EbzGeDxf21L1TJoFf9MKznL6Ew=")',

    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
  },
  login: {
    width: '400px',
    padding: '40px',
    border: '1px solid black',
    borderRadius: '4px',
    backgroundColor: 'white',
    marginLeft:'500px'
   
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#594f8d',
    textTransform: 'uppercase',
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
  registerLink: {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#594f8d',
  },
};


function Login({
  email,
  pass,
  name,
  setEmail,
  setPass,
}) {
  const check = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8181/api/v1/auth/authenticate",
        {
        
          email: email,
          password: pass,
        }
      );

      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      console.log(localStorage.getItem('token'));
      window.alert("Successfully Logged in as " + email);
      navigate("/home");
      setEmail('');
      setPass('');
    } catch (error) {
      console.log(error);
      window.alert("Invalid Credentials");
    }
  };

  const navigate = useNavigate();
  const [checkpass, setCheckPass] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.login}>
        <form onSubmit={check}>
        <img style={{marginLeft: '120px',width:'20%'}}src="https://cdn-icons-png.flaticon.com/128/11161/11161962.png"/>
        <br></br>
        <br></br>
          <h2 style={styles.title}>Login</h2>
         
          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password:</label>
            <input
              style={styles.input}
              type="password"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button style={styles.button} type="submit">
            Login
          </button>
          {checkpass && alert('Successful login ' + name)}
          {checkpass && navigate('/home')}
          <Link to="/signup" style={styles.registerLink}>
            Don't have an account? Register
          </Link>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    pass: state.login.pass,
    name: state.login.name,
  };
};

const mapDispatchToProps = {
  setEmail,
  setPass,
  setName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);