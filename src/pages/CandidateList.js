import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CandidateList() {
  const [candidate, setCandidate] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getCandidate();
  }, []);

  const handleAdd = () => {
    navigate("/add-candidate");
  };

  const getCandidate = async () => {
    try {
      const respons = await axios.get(
        "https://ai-employ-management-system-1.onrender.com/candidates",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
      );
      setCandidate(respons.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load Candidate");
    }
  };
  const deleteCandidate = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Candidate?",
    );

    if (!confirmDelete) return;
    try {
      await axios.delete(
        `https://ai-employ-management-system.onrender.com-1/candidates/${id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
      );
      alert("Candidate Deleted Successfully");
      getCandidate();
    } catch (error) {
      console.log(error);
      alert("Failed to delete Candidate");
    }
  };

  return (
    <div className="min-h-screen bg-gray-700 p-4 ">
      <div className="bg-blue-700 text-white py-2 shadow-md mt-2 ">
        {" "}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center p-4 md:p-8">
          Employee Management System
        </h1>
      </div>
      <button
        onClick={handleAdd}
        className="bg-green-700 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-900"
      >
        + Add Candidate
      </button>

      <div className=" bg-white shadow-xl rounded-xl p-4 mt-4 overflow-x-auto">
        <table className=" min-w-[1200px] w-full border">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className=" py-2 whitespace-nowrap">Sr.No</th>
              <th className=" py-2 whitespace-nowrap">Id</th>
              <th className=" py-2 whitespace-nowrap">Name</th>
              <th className=" py-2 whitespace-nowrap">Skills</th>
              <th className=" py-2 whitespace-nowrap">Email</th>
              <th className=" py-2 whitespace-nowrap">Gender</th>
              <th className=" py-2 whitespace-nowrap">Phone</th>
              <th className=" py-2 whitespace-nowrap">Recommendedrole</th>
              <th className= "py-2 whitespace-nowrap">Score</th>
              <th className=" py-2 whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {candidate.map((can, index) => (
              <tr
                key={can.id}
                className="text-center border-b hover:bg-gray-100"
              >
                <td className=" py-2 whitespace-nowrap">{index + 1}</td>
                <td className=" py-2 whitespace-nowrap">{can.id}</td>
                <td className=" py-2 whitespace-nowrap">{can.name}</td>
                <td className=" py-2 whitespace-nowrap">{can.skills}</td>
                <td className=" py-2 whitespace-nowrap">{can.email}</td>
                <td className=" py-2 whitespace-nowrap">{can.gender}</td>
                <td className=" py-2 whitespace-nowrap">{can.phone}</td>
                <td className=" py-2 whitespace-nowrap">{can.recommendedrole}</td>
                <td className=" py-2 whitespace-nowrap">{can.score}</td>
                <td className=" py-2 whitespace-nowrap space-x-2">
                  <button
                    onClick={handleAdd}
                    className="w-full sm:w-auto bg-green-700 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default CandidateList;
