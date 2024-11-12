import React from 'react'
import Layout from '../components/layout/Layout'
import LoginImage from '../assets/loginicon.jpg'

function LoginPage() {
    return (
        <Layout childern={
            <div className='w-full md:px-20 my-4'>
                <div className='w-full lg:mx-auto lg:w-[850px] inline-block lg:flex'>
                    <LoginHeading />
                    <LoginInput />

                </div>
            </div>
        } />
    )
}
export default LoginPage

function LoginHeading() {
    return (
        <div className='w-full lg:w-[350px] bg-blue-500 p-7'>
            <div className='mt-4 mx-auto'>
                <h2 className='text-3xl text-white font-semibold mb-5'>Login</h2>
                <p className='text-gray-300 text-lg'>Get access to your Orders,</p>
                <p className='text-gray-300 text-lg'>Wishlist and Recommendations</p>
            </div>
            <div className='hidden lg:flex justify-center items-center lg:mt-48'>
                <img src={LoginImage} className='w-52 h-32' alt='login icon' />
            </div>
        </div>
    );
}

function LoginInput() {
    return (
        <div className='w-full lg:w-[500px] bg-white p-7'>
            <input type='text' placeholder='Enter your Mobile Number' className='border-b w-full ps-3 py-2 outline-none mt-10' />
            <p className='text-[12px] text-gray-400 mt-7 font-semibold'>
                By continuing, you agree to Flipkart's <span className='text-blue-500'>Terms of Use</span> and <span className='text-blue-500'>Privacy Policy.</span>
            </p>
            <button className='w-full bg-orange-500 mt-5 text-white font-semibold py-3 shadow-md rounded-sm '>Request OTP</button>
            <p className='text-blue-500 font-semibold text-center mt-10 lg:mt-56 text-sm cursor-pointer'>New to Flipkart? Create an account</p>
        </div>
    )
}