import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function VerifyOtp() {

  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email||"";

  const verifyOtp = async () => {

    try {

      const response = await axios.post(
        "https://ai-employ-management-system-1.onrender.com/auth/verify-otp",
        {
          email,
          otp
        }
      );
      if(response.data==="OTP Verified Successfully"){
      alert(response.data);
      navigate("/")}
      else{
        alert(response.data);

      }
      
      }

     catch(error){
      alert("Invalid OTP");
    }
  };
  const resendOtp = async () => {
  try {
    await axios.post("https://ai-employ-management-system-1.onrender.com/auth/send-otp", {
      email,
    });

    alert("OTP Sent Successfully");
  } catch (error) {
    alert("Failed to send OTP");
  }
};

  return (
    <div className="min-h-screen bg-gray-700 p-2 ">
       <div className="bg-blue-700 text-white py-2 shadow-md mt-2">  <h1 className="text-4xl font-bold text-center p-8">Employee Management System</h1>
      </div>
       <div className="flex justify-center items-center h-[80vh]">
        <div className="bg-white  p-8 rounded-xl shadow-xl w-96">

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
        <button
  onClick={resendOtp}
  className="  w-full mt-3  bg-green-600 text-white p-3 rounded-lg"
>
  Resend OTP
</button>

      </div>
       </div>
      
    </div>
  );
}

export default VerifyOtp;