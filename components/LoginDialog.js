import { useState } from "react";
import {toast} from "react-toastify"
import Cookies from "js-cookie";

export default function LoginDialog({setName,setOpenLoginDialog, setOpenRegisterDialog}){
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        username:"",
        password: ""
    })

    const validate= ()=>{
        let pass = true;
        let error={}
        if(username.length === 0){
            error.username = "Please Enter Username";
            pass = false;
        }
        if(password.length === 0){
            error.password = "Please Enter Password";
            pass = false;
        }
        setErrors(error);
        return pass;
    }

    const login = async () => {
       if(validate()){
            try {
              const formData = new FormData();
              formData.append('username', username);
              formData.append('password', password);
              const token = await fetch('https://learnkoodsapi.onrender.com/api/token/', {
                method: 'POST',
                body: formData
              });
              const tokenValue = await token.json();
            
              const response = await fetch('https://learnkoodsapi.onrender.com/login_api/', {
                method: 'POST',
                body: formData,
                headers: {
                    Authorization: `Bearer ${tokenValue.access}`,
                  },
              });
              if (response.ok) {
                const data = await response.json();
                toast.success("Login Successful")
                Cookies.set("token", token.access);
                Cookies.set("username", username);
                setName(username)
                setOpenLoginDialog(false);
                
              } else {
              
                toast.error("Some error occurred")
              }
            } catch (error) {
             
              toast.error("Some error occurred")
            }
          };
    
    }

    return (
        <div className="relative" style={{minWidth: "500px", padding: "30px 40px 20px"}}>
        <button onClick={()=> setOpenLoginDialog(false)} className="closed hover:bg-primary p-3"><img width="20px" src="/letter-x.png"/></button>
        <div className="font-medium text-2xl text-center mb-8">Login to Superio</div>
        <div className="label">
            Username
        </div>
        <input value={username} onChange={(e)=> setUserName(e.target.value)} className="bg-background hover:bg-white" style={{paddingLeft: "20px"}} placeholder="Username"/>
        <small className="text-orange">{errors.username}</small>
        <div className="label mt-4">
            Password
        </div>
        <input value={password} onChange={(e)=> setPassword(e.target.value)} className="bg-background hover:bg-white" style={{paddingLeft: "20px"}} placeholder="Password"/>
        <small className="text-orange">{errors.password}</small>
         <div className="mt-6 flex justify-between">
            <div className="flex gap-2">
                <input style={{height:"20px", width: "20px"}} type="checkbox"/>
                <div>Remember me</div>
            </div>
            <div>
                Forgot password?
            </div>
         </div>
         <button onClick={()=> login()} className="login mt-8 w-full">Log In</button>
         <small className="text-center text-base block mt-6 w-full ">
         {"Don't"} have an account? <span role="button" onClick={(e)=> {setOpenRegisterDialog(true), setOpenLoginDialog(false)} } className="font-medium">Signup</span>
         </small>
         {/* <div className="divider text-center"><span>or</span></div> */}
        </div>
    )
}