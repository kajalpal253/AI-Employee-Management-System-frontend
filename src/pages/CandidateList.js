import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function CandidateList() {
   const [candidate, setCandidate] = useState([]); 
  const navigate= useNavigate();
   useEffect(()=>{
    getCandidate();
   },[]);

  

   const  handleAdd=() =>{
    navigate("/add-candidate");
   }

   const getCandidate = async () => {
    try{
        const respons = await axios.get("https://ai-employ-management-system.onrender.com/candidates",
            {
                headers:{
                    Authorization: "Bearer "+ localStorage.getItem("token"),
                },
            }
        );
        setCandidate(respons.data);
    }catch(error){
        console.log(error);
        alert("Failed to load Candidate")
    };
};
const deleteCandidate = async (id)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this Candidate?");
         
    if(!confirmDelete)return;
    try {
        await axios.delete(`https://ai-employ-management-system.onrender.com/candidates/${id}`,{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("token"),
            },
        });
        alert("Candidate Deleted Successfully");
        getCandidate();
    } catch (error) {
        console.log(error);
        alert("Failed to delete Candidate");
    }
}

  
    return (
        <div className="min-h-screen bg-gray-700 p-2 ">
            <div className="bg-blue-700 text-white py-2 shadow-md mt-2">  <h1 className="text-4xl font-bold text-center p-8">Employee Management System</h1>
      </div>
            <button onClick={handleAdd} className="bg-green-700 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-900">
                + Add Candidate
            </button>

            <div className=" bg-white shadow-xl rounded-xl p-6 mt-2">
                <table className="w-full border">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="p-3">Sr.No</th>
                            <th className="p-3">Id</th>
                            <th className="p-3">Name</th>
                             <th className="p-3">Skills</th>
                             <th className="p-3">Email</th>
                             <th className="p-3">Gender</th>
                             <th className="p-3">Phone</th>
                             <th className="p-3">Recommendedrole</th>
                            <th className="p-3">Score</th>
                             <th className="p-3">Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {candidate.map((can,index) =>(
                            <tr key={can.id}
                            className="text-center border-b hover:bg-gray-100">
                                <td className="p-3">{index+1}</td>
                                <td className="p-3">{can.id}</td>
                                <td className="p-3">{can.name}</td>
                                <td className="p-3">{can.skills}</td>
                                <td className="p-3">{can.email}</td>
                                 <td className="p-3">{can.gender}</td>
                                <td className="p-3">{can.phone}</td>
                                <td className="p-3">{can.recommendedrole}</td>
                                <td className="p-3">{can.score}</td>
                                <td className="p-3 space-x-2">
                                     <button onClick={()=>deleteCandidate(can.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>


                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )

}
export default CandidateList;