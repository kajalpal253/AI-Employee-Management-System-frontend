import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function VerifyOtp() {

  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const verifyOtp = async () => {

    try {

      const response = await axios.post(
        "http://localhost:8999/auth/verify-otp",
        {
          email,
          otp
        }
      );
      localStorage.setItem("token",response.data);

        navigate("/employees");
      }

     catch(error){
      alert("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">

        <h1 className="text-2xl font-bold mb-4">
          Verify OTP
        </h1>

        <input
          type="text"
          placeholder="Enter OTP"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={(e)=>setOtp(e.target.value)}
        />

        <button
          onClick={verifyOtp}
          className="w-full bg-blue-600 text-white p-3 rounded-lg"
        >
          Verify OTP
        </button>

      </div>
    </div>
  );
}

export default VerifyOtp;