import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import EmployeeList from './pages/EmployeeList';
import AddEmployee from './pages/AddEmployee';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route  path='/register' element={<Register/>}/>
      <Route path='/employee' element={<EmployeeList/>}/>
      <Route path='/add-employee' element={<AddEmployee/>}/>

    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
