import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function EmployeeList() {
  const [employees, setEmployees] = useState([]); 
  const navigate= useNavigate();
   useEffect(()=>{
    getEmployee();
   },[]);

   const handleEdit =(id)=>{
    navigate(`/edit/${id}`);
   };

   const  handleAdd=() =>{
    navigate("/add-employee");
   }

   const getEmployee = async () => {
    try{
        const respons = await axios.get("http://localhost:8999/employee",
            {
                headers:{
                    Authorization: "Bearer "+ localStorage.getItem("token"),
                },
            }
        );
        setEmployees(respons.data);
    }catch(error){
        console.log(error);
        alert("Failed to load employees")
    };
};
const deleteEmployee = async (id)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this employee?");

    if(!confirmDelete)return;
    try {
        await axios.delete(`http://localhost:8999/employee/${id}`,{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("token"),
            },
        });
        alert("Employee Deleted Successfully");
        getEmployee();
    } catch (error) {
        console.log(error);
        alert("Failed to delete employee");
    }
}

  
    return (
        <div className="min-h-screen bg-gray-100 p-2 ">
            <div className="bg-blue-700 text-white py-2 shadow-md mt-2">  <h1 className="text-4xl font-bold text-center p-8">Employee Management System</h1>
      </div>
            <button onClick={handleAdd} className="bg-green-700 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-900">
                + Add Employee
            </button>

            <div className=" bg-white shadow-xl rounded-xl p-6 mt-2">
                <table className="w-full border">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="p-3">Id</th>
                            <th className="p-3">Name</th>
                             <th className="p-3">Department</th>
                             <th className="p-3">Salary</th>
                             <th className="p-3">Email</th>
                             <th className="p-3">Gender</th>
                             <th className="p-3">Phone</th>

                             <th className="p-3">Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp) =>(
                            <tr key={emp.id}
                            className="text-center border-b hover:bg-gray-100">
                                <td className="p-3">{emp.id}</td>
                                <td className="p-3">{emp.name}</td>
                                <td className="p-3">{emp.department}</td>
                                <td className="p-3">{emp.salary}</td>
                                <td className="p-3">{emp.email}</td>
                                 <td className="p-3">{emp.gender}</td>
                                <td className="p-3">{emp.phone}</td>
                                <td className="p-3 space-x-2">
                                    <button onClick={()=>handleEdit(emp.id)} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700">Edit</button>
                                     <button onClick={()=>deleteEmployee(emp.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>


                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
   }


export default EmployeeList;