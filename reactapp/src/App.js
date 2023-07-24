import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Login from './components/login';
import Signup from './components/signup';
import NavBar from './components/home';
import Front from './components/Front';
import Contact from './components/Contact';
import Stock from './components/Stock';
import About from './components/About';
import Data from './components/Data';
import Resource from './components/Resource';
import Report from './components/Report';
import store from './components/store';
import FeedForm from './components/feedback';

function App() {
  return (
    <Provider store={store}>
    <Router>
   
    
      <Routes>
      

      <Route path='/' element={<Front/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<NavBar/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Stock' element={<Stock/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Data' element={<Data/>}/>
      <Route path='/Resource' element={<Resource/>}/>
      <Route path='/Report' element={<Report/>}/>
     <Route path="/fb" element={<FeedForm/>}/>





      

      </Routes>
    </Router>
    </Provider>
  );
}

export default App