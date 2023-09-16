import "./RegisterStyle.css";
import {useState} from 'react';
import {useNavigate} from "react-router-dom"
import axios from 'axios'

const Register = () => {

  const navigate = useNavigate();

  const [data,setData] = useState({email:"",password:""});

  function handleChange(e){
    setData({
      ...data,
      [e.target.name]:e.target.value,
    })
  }

  async function handleSubmit(e){
    e.preventDefault();
    console.log(data);
    const res= await axios.post("http://localhost:8000/user/register",data)

    console.log(res.data);
    alert(res.data.message);
    setData({email:"",password:""})
    if(res.data.success)navigate('/login');
  }

  return (
    <div className="register-main">
      <div className="register-left">
        <div className="register-left-top">
          <p>If You Already Registered Login Here</p>
          <button onClick={()=>navigate('/login')}>Login</button>
        </div>
      </div>
      <form className="register-form">
        <h1>Register</h1>
        <input 
          value={data.email} 
          onChange={handleChange} 
          required 
          name="email" 
          type="email" 
          placeholder="Email" 
        />
        <input
          value={ data.password}
          onChange={handleChange}
          required
          name="password"
          type="password"
          placeholder="Password"
        />
        <button onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
};

export default Register;
