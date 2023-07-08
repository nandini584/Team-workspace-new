import React from 'react'
import LoginImg from '../../assets/Register/LoginImg.svg'
import Mail from '../../assets/Register/mail.svg'
const LoginComp = () => {
  return (
    <div className='flex flex-row items-center'>
        <img src={LoginImg} alt="loginimg" className="h-[100vh]" />
        <div className="flex flex-col">
            <h1 className="font-jost font-black text-5xl">Hi There<span className="text-main">!</span> </h1>
            <h2 className='font-inter font-regular text-sm'>This is a placeholder. This is a placeholder.</h2>
            <div className='w-[519px] border-none bg-[#EAE8E8] rounded-full flex flex-row items-center justify-around py-3'>
                <span className='font-jost font-medium text-sm'>Sign in</span>
                <span className='font-jost font-medium text-sm'>Sign up</span>
            </div>
            <div className='flex flex-row border '>
                <img src={Mail} alt="mail" />
                <p>Login with School Account</p>
            </div>
            <div className='flex flex-row'>
                <p>Remember me</p>
                <p>Forget Password?</p>
            </div>
            <span>or</span>
            <div>
                <input type="text" name='Email' placeholder='Your Email' />
                <input type="text" name='Password' placeholder='Password' />
            </div>
            <button className='btn-signup'>Sign in</button>

        </div>
    </div>
  )
}

export default LoginComp