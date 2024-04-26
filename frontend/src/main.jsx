import React from 'react'; 
import ReactDOM from 'react-dom'; 
import App from './components/App'; 
import Footer from './components/Footer'; 
import Navbar from './components/Navbar'; 
 
ReactDOM.createRoot(document.getElementById('root')).render( 
  <> 
    <Navbar /> 
    <App />
    <Footer /> 
  </> 
);