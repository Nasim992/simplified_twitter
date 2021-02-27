import './Register.css';
import {useForm} from 'react-hook-form';
const Register = () => {

    const {register,handleSubmit} = useForm();

    const onSubmit = (data)=> {
        console.log(data); 
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
                     />
                     </div><br></br>
                     <div className="form-group">
                     <input 
                     type="text"
                     name="fullname"
                     className="form-control"
                     placeholder="Enter your full name here"
                     ref={register}
                     />
                     </div>
                     <button 
                     type="submit"
                     name="login"
                     className="btn btn-sm btn-info"
                     >Register</button>
                 </form>
             </div>
        </div>
    ); 
};

export default Register;