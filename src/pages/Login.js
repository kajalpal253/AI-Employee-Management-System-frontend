import { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

function Login() {
    const navigate= useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const response = await axios.post(
        "https://ai-employ-management-system-1.onrender.com/auth/login",
        {
          username,
          password,
        }
      );
      if (response.data === "Please verify your email first") {
      alert(response.data);
      return;
    }

    if (response.data === "Invalid Username or Password") {
      alert(response.data);
      return;
    }

    localStorage.setItem("token", response.data);
    alert("Login Successful");
    navigate("/dashboard");

     
    } catch (error) {
      alert("Login Failed");
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