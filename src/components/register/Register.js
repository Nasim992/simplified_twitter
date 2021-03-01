import './Register.css';
import {useForm} from 'react-hook-form';
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';

const Register = () => {
 
   const [registerData,setRegisterData] = useState([]);
    const {register,handleSubmit} = useForm();
    const history = useHistory();

    useEffect(()=>{
        fetch('http://localhost:5000/Registerdata')
        .then (res=>res.json())
        .then(data=>
            setRegisterData(data)
            )
    },[])
    const onSubmit = (data)=> {       
        const rData = registerData.find(regData => regData.username==data.username);
        if(rData==undefined || rData==null) {
            fetch('http://localhost:5000/Register', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              })
              .then(response => response.json())
              .then(json => console.log(json))
                alert("Registration Successfull.Now Login to your account");
                history.push('/Login');
        }
        else {
            alert("Username is already available.Try different username");
            history.push('/Register');
        }
    } 

    return ( 
        <div className="container">
             <div className="input__form">
                 <h4>Registration Form</h4>
                 <form onSubmit={handleSubmit(onSubmit)}>
                     <div className="form-group"> 
                     <input 
                     type="text"
                     name="username"
                     className="form-control"
                     placeholder="Enter your username here"
                     ref={register}
                     required
                     />
                     </div><br></br>
                     <div className="form-group">
                     <input 
                     type="text"
                     name="fullname"
                     className="form-control"
                     placeholder="Enter your full name here"
                     ref={register}
                     required
                     />
                     </div>
                     <button 
                     type="submit"
                     name="login"
                     className="btn btn-sm btn-info"
                     >Register</button>
                      <Link to="Login"><button className="btn btn-sm btn-secondary ml-2">Login</button></Link>
                 </form>
             </div>
        </div>
    ); 
};

export default Register;