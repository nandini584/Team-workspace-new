import React from 'react'
import Login from '../Pages/Register/Login'
import Register from '../Pages/Register/Signup'
import ForgetPswd from '../Components/Register/ForgetPswd'
import MainDashboard from '../Components/Dashboard/MainDashboard'
import MainContent from '../Components/Dashboard/MainContent'
import PersonalDasboard from '../Pages/Project/PersonalDashboard'
import CreateProject1 from '../Pages/Project/CreateProject1'
import CreateProject2 from '../Pages/Project/CreateProject2'
import ProjectPage from '../Pages/Project/ProjectPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/api/v1/login/:userid" element={<Login />}></Route> 
    <Route path="/api/v1/register" element={<Register />}></Route> 
    <Route path="/api/v1/password/forget" element={<ForgetPswd />}></Route> 
    <Route path="/api/v1/projectdashboard/:userid" element={<PersonalDasboard />}></Route> 
    <Route path="/api/v1/projectdashboard/:userid/projects/:projectid/tasks" element={<MainDashboard />}></Route> 
    <Route path="/api/v1/createproject1/:projectid" element={<CreateProject1 />}></Route> 
    <Route path="/api/v1/createproject2/:projectid" element={<CreateProject2 />}></Route> 
    <Route path="/api/v1/users/:userid/projectpage/:projectid" element={<ProjectPage />}></Route> 
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App