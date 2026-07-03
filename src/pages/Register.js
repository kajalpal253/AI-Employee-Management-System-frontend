import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register(){
    const navigate= useNavigate();
const [username,setUsername] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [role,setRole] = useState("");

const register = async () => {
    try {
        await axios.post("http://localhost:8999/auth/register",
        {
            username,
            email,
            password,
            role,
        });
        
        navigate("/verify-otp",{
            state: {email}
        });
        
    }catch(error){
        console.log(error);
        console.log(error.response);
        console.log(error.response?.data);
        alert(error.response?.data ||"Registration Failed");
        
    }
};



return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-indigo-700">
      <div className=" min-h-screen flex items-center justify-center p-6">  
          <h1 className="text-7xl font-bold text-center text-blue-900"> Employee Management System</h1>
    </div>
        <div className="bg-white p-5 rounded-2xl shadow-2xl w-96 h-70">
            <p className=" text-2xl font-bold text-center text-gray-700 mb-6"> Create Your Account</p>
            <input type="text"
            placeholder="Username"
            className="w-full p-3 border rounded-lg mb-6"
            onChange={(e)=> setUsername(e.target.value)} />

            <input type="text"
            placeholder="Email"
            className="w-full p-3 border rounded-lg mb-6"
            onChange={(e)=> setEmail(e.target.value)} />

            <input type="text"
            placeholder="Password"
            className="w-full p-3 border rounded-lg mb-6"
            onChange={(e)=> setPassword(e.target.value)} />

            <input type="text"
            placeholder="role"
            className="w-full p-3 border rounded-lg mb-6"
            onChange={(e)=> setRole(e.target.value)} />

            <button onClick={register}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
             Register   
            </button>
            <div>
            <p className="text-sm text-gray-600">
          Already have  an account?
          <a
          href="/"
            size="small"
            className="ml-2 !text-black !font-semibold"
          >
            Login
          </a>
        </p>
        </div>

        </div>
    </div>
)

}
export default Register;