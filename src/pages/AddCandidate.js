import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddCandidate(){

    const navigate =useNavigate();
    const [candidate,setCandidate]=useState({
        name:"",
        skills:"",
        salary:"",
        email:"",
        gender:"",
        phone:"",
        
    });

    const handleChange=(e)=>{
        setCandidate({
            ...candidate,
            [e.target.name]:e.target.value,
        });
    };
    const saveCandidate =async () =>{
        try {
            await axios.post("https://ai-employ-management-system-1.onrender.com/candidates/upload",
                candidate,{
                    headers :{
                        Authorization:"Bearer "+localStorage.getItem("token"),
                    },
                }
            );
            alert("Candidate Add Successfully");
            navigate("/candidate");
        } catch (error) {
           console.log(error); 
           alert("Failed to Add Candidate ");
        }
    }

    return (
    <div className="min-h-screen  bg-gray-700">
       <div className="bg-blue-700 text-white py-2 shadow-md">  <h1 className="text-4xl font-bold text-center ">Employee Management System</h1>
    
        </div>
        <div className=" flex justify-center   mt-12">
          <div className="bg-white p-8 rounded-xl shadow-xl w-[450px]">

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Add Candidate
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Candidate Name"
          value={candidate.name}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills"
          value={candidate.skills}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={candidate.email}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-6"
        />
        <select
  name="gender"
  placeholder="Gender"
  value={candidate.gender}
  onChange={handleChange}
  className="w-full border p-3 rounded mb-4"
>
  <option value="">Select Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
</select>

       <input
          type="number"
          name="phone"
          placeholder="Phone"
          value={candidate.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-6"
        />


        <button
          onClick={saveCandidate}
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
        >
          Save 
        </button>

      </div>
        </div>
      

    </div>
  );

}

export default  AddCandidate;