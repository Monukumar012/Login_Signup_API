import { useState } from 'react';
import './LoginStyle.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [data,setData] = useState({email:"",password:""});

  function handleChange(e){
    setData({
      ...data,
      [e.target.name]:e.target.value,
    })
    // console.log(data);
  }

  async function handleSubmit(e){
    e.preventDefault();
    // console.log(data);

    const res = await axios.post("http://localhost:8000/user/login",data);


    console.log(res.data);
    alert(res.data.message);
    setData({email:"",password:""})
    if(res.data.success)navigate('/');
  }

  return (
    <div className="login-main">
      <div className="login-left">
        <div className="login-left-top">
          <p>If not Registered</p>
          <button onClick={()=>navigate('/register')}>Register</button>
        </div>
      </div>
      <form className="login-form">
        <h1>Login</h1>
        <input 
          value={data.email} 
          onChange={handleChange} 
          required 
          name="email" 
          type="email" 
          placeholder="Email" 
        />
        <input
          value={data.password}
          onChange={handleChange}
          required
          name="password"
          type="password"
          placeholder="Password"
        />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}

export default Login