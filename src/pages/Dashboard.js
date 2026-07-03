import { useNavigate,Link } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
    const logout =() =>{
        localStorage.removeItem("token");
        navigate("/");
    };
    return (
        <div className="h-screen flex flex-col">
            <div className="h-16 bg-blue-700 flex justify-between  items-center text-white p-6 ">
                <h1 className="text-3xl font-bold">Employee Management System</h1>
                <button onClick={logout} className="bg-red-600 px-4 py-2 rounded-lg">Logout</button>
            </div>
            <div  className="flex flex-1">
                <div className="w-72 bg-blue-500 text-white p-5">
                    <Link to="/dashboard" className="block p-3 hover:bg-blue-700 rounded">DashBoard</Link>
                     <Link to="/add-employee" className="block p-3 hover:bg-blue-700 rounded">Add Employee</Link>
                     <Link to="/employee" className="block p-3 hover:bg-blue-700 rounded">Employee List</Link>
                     <Link to="/candidate" className="block p-3 hover:bg-blue-700 rounded">Candidate List</Link>
                     <Link to="/add-candidate" className="block p-3 hover:bg-blue-700 rounded"> Add Candidate </Link>


                </div>
                <div className="flex-1  bg-blue-900 p-8 overflow-auto">

  <h1 className="text-3xl font-bold text-gray-100 b-8">
    Welcome to Employee Management System 👋
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    <div
      onClick={() => navigate("/add-employee")}
      className="bg-white rounded-xl shadow-xl p-8 cursor-pointer hover:scale-105 duration-300"
    >
      <div className="text-6xl text-center">👨‍💼</div>

      <h2 className="text-2xl font-bold text-center mt-4">
        Add Employee
      </h2>

      <p className="text-gray-600 text-center mt-2">
        Add a new employee to the system.
      </p>
    </div>

    <div
      onClick={() => navigate("/add-candidate")}
      className="bg-white rounded-xl shadow-xl p-8 cursor-pointer hover:scale-105 duration-300"
    >
      <div className="text-6xl text-center">👩‍🎓</div>

      <h2 className="text-2xl font-bold text-center mt-4">
        Add Candidate
      </h2>

      <p className="text-gray-600 text-center mt-2">
        Add a new candidate to the system.
      </p>
    </div>

  </div>

</div>
                
            </div>
           
        </div>
        
    )

}
export default Dashboard;