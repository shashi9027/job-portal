import { useState } from "react";
import {toast} from "react-toastify"
export default function RegisterDialog({setOpenLoginDialog, setOpenRegisterDialog}){
    const [data, setData] = useState({
        username:"",
        firstname: "",
        lastname: "",
        email: "",
        password:""
    })
    const [errors, setErrors] = useState({
        username:"",
        firstname: "",
        lastname: "",
        email: "",
        password:""
    })

    const validate= ()=>{
        let pass = true;
        let error={}
        if(data.username.length === 0){
            error.username = "Please Enter Username";
            pass = false;
        }
        if(data.firstname.length === 0){
            error.username = "Please Enter Firstname";
            pass = false;
        }
        if(data.lastname.length === 0){
            error.username = "Please Enter Lastname";
            pass = false;
        }
        if(data.email.length === 0){
            error.username = "Please Enter Password";
            pass = false;
        }
        if(data.password.length === 0){
            error.password = "Please Enter Password";
            pass = false;
        }
        setErrors(error);
        return pass;
    }

    const register = async () => {
       if(validate()){
            try {
              const formData = new FormData();
              formData.append('username', data.username);
              formData.append('first_name', data.firstname);
              formData.append('last_name', data.lastname);
              formData.append('email', data.email);
              formData.append('password', data.password); 
              const response = await fetch('https://learnkoodsapi.onrender.com/user_api/', {
                method: 'POST',
                body: formData,
                
              });
      
              if (response.ok) {
                const data = await response.json();
                toast.success("User Registered Successfully")
                setOpenRegisterDialog(false);
                

              } else {
                toast.error("Some Error Occured")
              }
            } catch (error) {     
              toast.error("Some Error Occured")
            }
          };
    
    }
    
    const handleChange = (e) =>{
       setData({...data, [e.target.name] : e.target.value})
    }
    return (
        <div className="relative" style={{minWidth: "500px", padding: "30px 40px 20px"}}>
        <button onClick={()=> setOpenRegisterDialog(false)} className="closed hover:bg-primary p-3"><img width="20px" src="/letter-x.png"/></button>
        <div className="font-medium text-2xl text-center mb-8">Create a Free Superio Account</div>
        <div className="label">
            Username
        </div>
        <input name="username" value={data.username} onChange={(e)=> handleChange(e)} className="bg-background hover:bg-white" style={{paddingLeft: "20px"}} placeholder="Username"/>
        <small className="text-orange">{errors.username}</small>
        <div className="label mt-4">
            Firstname
        </div>
        <input name="firstname" value={data.firstname} onChange={(e)=> handleChange(e)} className="bg-background hover:bg-white" style={{paddingLeft: "20px"}} placeholder="Firstname"/>
        <small className="text-orange">{errors.firstname}</small>
        <div className="label mt-4">
            Lastname
        </div>
        <input name="lastname" value={data.lastname} onChange={(e)=> handleChange(e)}className="bg-background hover:bg-white" style={{paddingLeft: "20px"}} placeholder="Lastname"/>
        <small className="text-orange">{errors.lastname}</small>
        <div className="label mt-4">
             Email
        </div>
        <input type="email" name="email" value={data.email} onChange={(e)=> handleChange(e)}className="bg-background hover:bg-white" style={{paddingLeft: "20px"}} placeholder="Email"/>
        <small className="text-orange">{errors.email}</small>
        <div className="label mt-4">
            Password
        </div>
        <input name="password" value={data.password} onChange={(e)=> handleChange(e)} className="bg-background hover:bg-white" style={{paddingLeft: "20px"}} placeholder="Password"/>
        <small className="text-orange">{errors.password}</small>
        
         <button onClick={()=> register()} className="login mt-8 w-full">Register</button>
         <small className="text-center text-base block mt-6 w-full ">
          Already have an account? <span role="button" onClick={()=> {setOpenLoginDialog(true), setOpenRegisterDialog(false)}} className="font-medium">Login</span>
         </small>
         {/* <div className="divider text-center"><span>or</span></div> */}
        </div>
    )
}