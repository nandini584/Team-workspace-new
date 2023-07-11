import React from 'react'
import Login from '../Pages/Register/Login'
import Register from '../Pages/Register/Signup'
import ForgetPswd from '../Components/Register/ForgetPswd'
import MainDashboard from '../Components/Dashboard/MainDashboard'
import MainContent from '../Components/Dashboard/MainContent'
import PersonalDasboard from '../Pages/Project/PersonalDashboard'
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
    </>
  )
}

export default App