import React from 'react';
import './Login.css';
import { useForm} from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

const Login = () => {

    const {register,handleSubmit } = useForm();
    const [registerData,setRegisterData] = useState([]);
    const history = useHistory();

    useEffect(()=>{ 
        fetch('http://localhost:5000/Registerdata')
        .then (res=>res.json())
        .then(data=>
            setRegisterData(data) 
            )
    },[])
    const onSubmit = (data)=>{
        const rData = registerData.find(regData => regData.username==data.username);
        if(rData) {
                alert("Login Successfull");
                history.push(`/home/${rData._id}`);
        }
        else {
            alert("You are not register");
            history.push('/Register');
        }
    }

    return ( 
        <div className="container">
             <div className="input__form">
                 <h4>Login Form</h4>
                 <form onSubmit={handleSubmit(onSubmit)}>
                     <div className="form-group">
                     <input 
                     type="text"
                     name="username"
                     className="form-control"
                     ref={register}
                     required
                     />
                     </div>
                     <button 
                     type="submit"
                     name="login"
                     className="btn btn-sm btn-info"
                     >Login</button>
                 </form>
             </div>
        </div>
    );
};

export default Login;