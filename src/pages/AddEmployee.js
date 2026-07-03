import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmployee(){
    const navigate =useNavigate();
    const [employee,setEmployee]=useState({
        name:"",
        department:"",
        salary:"",
        email:"",
        gender:"",
        phone:"",
        
    });

    const handleChange=(e)=>{
        setEmployee({
            ...employee,
            [e.target.name]:e.target.value,
        });
    };
    const saveEmployee =async () =>{
        try {
            await axios.post("https://ai-employ-management-system.onrender.com/employee",
                employee,{
                    headers :{
                        Authorization:"Bearer "+localStorage.getItem("token"),
                    },
                }
            );
            alert("Employee Add Successfully");
            navigate("/employee");
        } catch (error) {
           console.log(error); 
           alert("Failed to Add Employee ");
        }
    }

    return (
    <div className="min-h-screen  bg-gray-700">
       <div className="bg-blue-700 text-white py-2 shadow-md">  <h1 className="text-4xl font-bold text-center ">Employee Management System</h1>
    
        </div>
        <div className=" flex justify-center   mt-12">
          <div className="bg-white p-8 rounded-xl shadow-xl w-[450px]">

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Add Employee
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-6"
        />
        <select
  name="gender"
  placeholder="Gender"
  value={employee.gender}
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
          value={employee.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-6"
        />


        <button
          onClick={saveEmployee}
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
        >
          Save Employee
        </button>

      </div>
        </div>
      

    </div>
  );
}

export default AddEmployee;