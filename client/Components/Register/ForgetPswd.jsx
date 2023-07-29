import React from 'react'
import LoginImg from '../../assets/Register/LoginImg.svg'
import Mail from '../../assets/Register/mail.svg'
import styles from '../../src/global.module.css'
import {Link} from 'react-router-dom'
const ForgetPswd = () => {
  return (
    <div className='flex flex-row items-center'>
        <img src={LoginImg} alt="loginimg" className="h-[100vh]" />
        <div className="flex flex-col ml-72">
            <h1 className="font-jost font-black text-5xl flex flex-row items-center justify-center mb-3">Forget Password </h1>
            <h2 className='font-inter font-regular text-sm flex flex-row items-center justify-center mb-5'>This is a placeholder. This is a placeholder.</h2>
            <form onSubmit={handleSubmit}>
            <div className='flex flex-col '>
                <input type="text" name='new Pasword' placeholder='New Password' className='border-2 py-4 rounded-lg font-inter font-regular text-sm border-[#54535342] pl-5 mb-2'/>
                <input type="text" name='Confirm newPassword' placeholder='Confirm Password' className='border-2 py-4 rounded-lg font-inter font-regular text-sm border-[#54535342] pl-5 mb-10'/>
            </div>
            <div className="flex flex-row items-center justify-center font-inter font-bold text-sm ">
            <Link to="/api/v1/projectdashboard/:userid"> <button type="submit" className={styles.signup}>Sign in</button> </Link>
            </div></form>

        </div>
        
    </div>
  )
}

export default ForgetPswd