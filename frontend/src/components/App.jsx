import Home from './Home';
import Login from './Login';
import Register from './Register';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import WeatherApp from './WeatherApp';
import Alerts from './Alerts';
import Admin from './Admin';

function App() {

  return (
    <div style={{marginTop : '-3.5rem'}}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />          
          <Route path="/register" element ={<Register/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/weatherapp" element ={<WeatherApp/>} />
          <Route path="/Alerts" element ={<Alerts/>} />
          <Route path="/Admin" element={<Admin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
