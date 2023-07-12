import React from 'react'
import Login from '../Pages/Register/Login'
import Register from '../Pages/Register/Signup'
import ForgetPswd from '../Components/Register/ForgetPswd'
import MainDashboard from '../Components/Dashboard/MainDashboard'
import MainContent from '../Components/Dashboard/MainContent'
import PersonalDasboard from '../Pages/Project/PersonalDashboard'
<<<<<<< HEAD
import CreateProject1 from '../Pages/Project/CreateProject1'
import CreateProject2 from '../Pages/Project/CreateProject2'
const App = () => {
  return (
    < >
    {/* <Login />
    <Register /> */}
    {/* <ForgetPswd/> */}
    {/* <MainDashboard /> */}
    {/* <PersonalDasboard></PersonalDasboard> */}
    {/* <CreateProject1></CreateProject1> */}
    <CreateProject2></CreateProject2>
=======
import Project from "../Pages/Project/ProjectDisplay"
const App = () => {
  return (
    < >
    <Login />
    <Register />
    <ForgetPswd/>
    <PersonalDasboard></PersonalDasboard>
    <MainDashboard />
    <Project />
>>>>>>> 6ecf051129a048b6f17879ac705be8641958e995
    </>
  )
}

export default App