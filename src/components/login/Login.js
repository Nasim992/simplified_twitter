import React from 'react';
import './Login.css';
import { useForm} from 'react-hook-form';
const Login = () => {
 
    const {register,handleSubmit } = useForm();

    const onSubmit = (data)=>{
       console.log(data);
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