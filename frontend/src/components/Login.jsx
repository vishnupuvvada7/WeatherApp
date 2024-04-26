import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState } from 'react'; 
import { Link } from "react-router-dom"; 
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
const Login = () => { 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate(); 
 
    const handleSubmit = (event) => { 
        event.preventDefault(); 
         
        axios.post( 'http://localhost:3001/login', {email, password}) 
        .then(result => { 
            console.log(result); 
            if(result.data === "Success"){ 
                console.log("Login Success"); 
                alert('Login successful!') 
                navigate('/weatherapp'); 
            } 
            else{ 
                alert('Incorrect password! Please try again.'); 
            } 
        }) 
        .catch(err => console.log(err)); 
    } 
 
    return ( 
        <div> 
              
<div className="d-flex justify-content-center align-items-center text-center vh-100" > 
                <div className="bg-blue p-3 rounded" style={{width: '40%'}}> 
                    <h2 className='mb-3 text-primary'>Login</h2> 
                    <form onSubmit={handleSubmit}> 
                        <div className="row mb-3"> 
                            <div className="col"> 
                                <label htmlFor="exampleInputEmail1" className="form-label"> 
                                    <strong>Email Id</strong> 
                                </label> 
                                <input  
                                    type="email"  
                                    placeholder="Enter Email" 
                                    className="form-control"  
                                    id="exampleInputEmail1"  
                                    value={email} 
                                    onChange={(event) => setEmail(event.target.value)} 
                                    required 
                                /> 
                            </div> 
                        </div> 
                        <div className="row mb-3"> 
                            <div className="col"> 
                                <label htmlFor="exampleInputPassword1" className="form-label"> 
                                    <strong>Password</strong> 
                                </label> 
                                <input  
                                    type="password"  
                                    placeholder="Enter Password" 
                                    className="form-control"  
                                    id="exampleInputPassword1"  
                                    value={password} 
                                    onChange={(event) => setPassword(event.target.value)} 
                                    required 
                                /> 
                            </div> 
                        </div> 
                        <div className="row mb-3"> 
                            <div className="col"> 
                                <button type="submit" className="btn btn-primary">Login</button> 
                            </div> 
                        </div> 
                    </form> 
                   <div className="container my-2 d-flex justify-content-center align-items-center"> 
                   <p>Don't have an account?</p>
                   <div>
                  </div>
                  </div>
                  <div className="container my-2 d-flex justify-content-center align-items-center">
                  <Link to='/register' className="btn btn-secondary">Register</Link>
                  </div>
                </div> 
            </div> 
        </div> 
    ) 
} 
 
export default Login;