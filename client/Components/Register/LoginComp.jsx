import React from 'react'
import LoginImg from '../../assets/Register/LoginImg.svg'
import Mail from '../../assets/Register/mail.svg'
import styles from '../../src/global.module.css'
import {Link} from 'react-router-dom'
const LoginComp = () => {
  return (
    <div className='flex flex-row items-center'>
        <img src={LoginImg} alt="loginimg" className="h-[100vh]" />
        <div className="flex flex-col ml-64">
            <h1 className="font-jost font-black text-5xl flex flex-row items-center justify-center mb-3">Hi There<span className="text-main">!</span> </h1>
            <h2 className='font-inter font-regular text-sm flex flex-row items-center justify-center mb-5'>This is a placeholder. This is a placeholder.</h2>
            <div className='w-[519px] border-none bg-[#EAE8E8] rounded-full flex flex-row items-center justify-around py-3 mb-4'>
                <Link to="/api/v1/login/:userid"><span className='font-jost font-medium text-sm'>Sign in</span></Link>
                <Link to="/api/v1/register"><span className='font-jost font-medium text-sm '>Sign up</span></Link>
            </div>
            <div className='flex flex-row justify-center items-center border-2 py-4 rounded-lg font-inter font-regular text-sm border-[#54535342] mb-2'>
                <img src={Mail} alt="mail" />
                <p className='pl-4'>Login with School Account</p>
            </div>
            <div className='flex flex-row justify-between font-inter font-regular text-xs mb-3'>
                <p>Remember me</p>
                <Link to ="/api/v1/password/forget"><p>Forget Password?</p></Link>
            </div>
            <span className='flex flex-row justify-center items-center font-inter font-regular text-sm mb-7'>or</span>
            <form onSubmit={handleSubmit}>
            <div className='flex flex-col '>
                <input type="text" name='Email' placeholder='Your Email' className='border-2 py-4 rounded-lg font-inter font-regular text-sm border-[#54535342] pl-5 mb-2'/>
                <input type="text" name='Password' placeholder='Password' className='border-2 py-4 rounded-lg font-inter font-regular text-sm border-[#54535342] pl-5 mb-10'/>
            </div>
            <div className="flex flex-row items-center justify-center font-inter font-bold text-sm ">
            <Link to="/api/v1/projectdashboard/:userid"><button type="submit" className={styles.signup}>Sign in</button></Link>
            </div>
            </form>

        </div>
        
    </div>
  )
}

export default LoginComp