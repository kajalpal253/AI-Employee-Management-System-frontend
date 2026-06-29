import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const navigate= useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const login = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8999/auth/login",
        {
          username,
          password,
        }
      );

      localStorage.setItem("token", response.data);
      alert("Login Successful");
      navigate("/employee");
    } catch (error) {
      alert("Login Failed");
    }
  };

  const sendOtp = async() =>{
    try{
      const response = await axios.post(
        "http://localhost:8999/auth/send-otp",
        {
          email,
        }
      );
      alert("OTP Send Successfully")
    }catch(error){
      alert("Failed to send OTP");
    }
  };

  const verifyOtp = async() =>{
    try{
      const response = await axios.post(
        "http://localhost:8999/auth/verify-otp",
        {
          email,
          otp,
        }
      );
      alert(response.data)
      if(response.data === "OTP Verified"){
        navigate("/employee");
      }
    }catch(error){
      alert("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200">
      <div className="w-96 bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login 
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border rounded-lg p-3 mb-4"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3 mb-6"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
        <div>
            <p className="text-sm text-gray-600">
          Don’t have an account?
          <a
          href="/register"
            size="small"
            className="ml-2 !text-black !font-semibold"
          >
            Register
          </a>
        </p>
        </div>
      </div>
    </div>
  );
}

export default Login;