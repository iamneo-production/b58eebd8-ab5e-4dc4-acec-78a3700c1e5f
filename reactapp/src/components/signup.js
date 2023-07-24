import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundRepeat:"no-repeat",
      backgroundImage:'url("https://media.istockphoto.com/id/1478771982/photo/blur-inventory-warehouse-products-goods-stock-factory-inventory-storage-area-for-background.jpg?s=612x612&w=0&k=20&c=eFgLkpzp_prkFLRO4EbzGeDxf21L1TJoFf9MKznL6Ew=")',
      backgroundSize:"cover"
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#594f8d',
      textTransform: 'uppercase',
      fontFamily: 'Verdana, sans-serif',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '500px',
      padding: '20px',
      border: '1px solid black',
      borderRadius: '4px',
      backgroundColor:'white',
      height:'620px',
      marginRight:"100px",
      color:"#594f8d"
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px',
      width:"400px",
      marginLeft:"50px"
    },
    label: {
      
      marginBottom: '5px',
      fontSize: '16px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#594f8d',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      width: '90px',
      marginLeft: '30px',
    },
    error: {
      color: 'red',
      marginBottom: '10px',
      fontSize: '14px',
      textAlign: 'center',
      fontStyle: 'italic',
      fontWeight: 'bold',
      backgroundColor: '#FBE3E4',
      padding: '8px',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
  };
  const navigate=useNavigate('');
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [error, setError] = useState('');
  const[isSubmit,setIsSubmit]=useState(false);
  const handleSubmit=async(event)=>{
    event.preventDefault();


    setIsSubmit(true);
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsSubmit(false);
      return;
    }

    // Validate the email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setError('Invalid email address');
      setIsSubmit(false);
      return;
    }
    
    try{
      const response=await axios.post('http://localhost:8181/api/v1/auth/register',{
        name:name,
        email:email,
        password:password
  
      });
      console.log(response.status);
      if(response.status===200){
        setUsername("");
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        navigate("/login");
  
        
  
      }
      
    }
    catch(error){
      alert(error);
      setIsSubmit(false);
  
    }
    if(isSubmit){
    }
  };
  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
      <img style={{marginLeft: '10px',width:'15%'}}src="https://cdn-icons-png.flaticon.com/128/11161/11161962.png"/>
      
        <h2 style={styles.title}>Signup</h2>
        {error && <div style={styles.error}>{error}</div>}
        
        <div style={styles.inputContainer}>
          <label style={styles.label}>User Name:</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter your user name"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Email:</label>
          <input
            style={styles.input}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Password:</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Confirm Password:</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={styles.button} type="submit">Sign Up</button>
        </div>
        <p style={{marginLeft:"50px"}}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;