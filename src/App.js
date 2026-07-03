import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import EmployeeList from './pages/EmployeeList';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';
import CandidateList from './pages/CandidateList';
import AddCandidate from './pages/AddCandidate';
import VerifyOtp from './pages/VerifyOtp';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='dashboard' element={<Dashboard/>}></Route>
      <Route  path='/register' element={<Register/>}/>
      <Route path='verify-otp' element={<VerifyOtp/>}></Route>
      <Route path='/employee' element={<EmployeeList/>}/>
      <Route path='/add-employee' element={<AddEmployee/>}/>
      <Route path='/edit-employee/:id' element={<EditEmployee/>}/>
       <Route path='/candidate' element={<CandidateList/>}/>
       <Route path='/add-candidate' element={<AddCandidate/>}/>





    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
