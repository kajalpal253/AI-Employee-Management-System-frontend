import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

function EditEmployee(){
    const  {id} =useParams();
    const navigate =useNavigate();
    const [employee,setEmployee]=useState({
        name :"",
        department:"",
        salary:"",
        email:"",
        gender:"",
        phone:"",
    });
    
    useEffect(() => {
      const  getEmployee =async () =>{
        try {
            const response =await axios.get(`https://ai-employ-management-system-1.onrender.com/employee/${id}`,{
                headers: {
                    Authorization :"Bearer "+localStorage.getItem("token"),
                },
            });
            setEmployee(response.data);
        } catch (error) {
           console.log(error); 
        }
    };
    getEmployee();
}, [id]);

    const handleChange =(e) =>{
        setEmployee({
            ...employee,
            [e.target.name]:e.target.value,
        });
    }

    const  updateEmployee =async () =>{
        try {
            await axios.put(`https://ai-employ-management-system-1.onrender.com/employee/${id}`,employee,{
                headers: {
                    Authorization :`Bearer ${localStorage.getItem("token")}`,
                },
            });
            alert("Employee Update Successfully");
            navigate("/employee");
        } catch (error) {
            console.log("Update Failed");
        }
    
    };
    return (
<div className="min-h-screen flex flex-col items-center bg-gray-700">

      <div className="w-full bg-blue-700 text-white py-6 shadow-md">
        <h1 className="text-4xl font-bold text-center">
          Employee Management System
        </h1>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-xl w-[450px] mt-10">

        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Update Employee
        </h2>

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
          className="w-full border p-3 rounded mb-4"
        />

        <select
          name="gender"
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
          type="text"
          name="phone"
          placeholder="Phone"
          value={employee.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-6"
        />

        <button
          onClick={updateEmployee}
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
        >
          Update Employee
        </button>

      </div>

    </div>
  );
}

export default EditEmployee;