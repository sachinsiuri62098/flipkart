import React, { useState } from 'react'
import flipCartLogo from "../assets/flipkart-logo.png"
import { AiOutlineHeart, AiOutlineGift } from "react-icons/ai";
import { FaRegUserCircle, FaBars } from "react-icons/fa";
import { MdCardGiftcard, MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineFileDownload } from "react-icons/md";
import { RxCube } from "react-icons/rx";
import { BsPatchPlus } from "react-icons/bs";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { PiStorefront, PiHeadsetLight, PiTrendUp } from "react-icons/pi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { GoBell } from "react-icons/go";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='w-full bg-white py-2 md:py-3.5 sticky top-0 z-50 shadow'>
            <div className='container px-3 md:px-0 mx-auto flex justify-between relative' >
                <Logo />
                <SearchBox />
                <Menu />
            </div>
        </header>
    )
}
export default Header;

function Logo() {
    return (
        <div className='my-auto md:ps-7 flex'>
            <button className='my-auto mx-3 md:hidden'><FaBars /></button>
            <Link to={'/'}>
                <img src={flipCartLogo} alt="Website Logo" className='w-[95px] h-[35px] cursor-pointer' />
            </Link>
        </div>
    )
}

function SearchBox() {
    return (
        <div className='hidden md:inline-block ps-5'>
            <div className='my-auto flex text-slate-900'>
                <button className='h-[40px] ps-4 pe-1 bg-sky-50 text-xl rounded-l-md'>
                    <IoSearch />
                </button>
                <input type="text" placeholder='Search for Products, Brands and More' className='bg-sky-50 md:w-[300px] lg:w-[375px] xl:w-[550px] h-[40px] px-2 py-4 rounded-r-md outline-none text-lg' />
            </div>
        </div>
    )
}

function Menu() {
    const [isLoginBtn, setIsLoginBtn] = useState(false)
    const [isMoreBtn, setIsMoreBtn] = useState(false)
    return (
        <ul className='flex my-auto justify-between'>
            <li className='cursor-pointer md:mx-2 lg:mx-5 my-auto text-lg'>
                <Link to={'/login'} >
                    <button onMouseEnter={() => (setIsLoginBtn(!isLoginBtn))} onMouseLeave={() => (setIsLoginBtn(!isLoginBtn))} className='w-[100px] h-[40px] items-center justify-center rounded-md hover:bg-blue-600 hover:text-white hidden md:flex relative'>
                        <FaRegUserCircle className='text-xl' />
                        <span className='mx-1'>Login</span>
                        {isLoginBtn ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                        {isLoginBtn ? <LoginBtn /> : ""}
                    </button>
                    <button className='w-[100px] h-[40px] flex items-center justify-center rounded-md hover:bg-blue-600 hover:text-white relative md:hidden'>
                        <FaRegUserCircle className='text-xl' />
                        <span className='mx-1'>Login</span>
                        <MdKeyboardArrowDown />
                    </button>
                </Link>
            </li>
            <li className='cursor-pointer ms-3 md:mx-2 lg:mx-5 my-auto text-lg flex items-center justify-center'>
                <IoCartOutline className='me-1 text-xl' /><span className='hidden xl:inline-block'>Cart</span>
            </li>
            <li className='cursor-pointer hidden mx-2 lg:mx-5 md:flex items-center justify-center text-lg'>
                <PiStorefront className='me-1 text-xl' /><span className='hidden xl:inline-block'>Become a Seller</span>
            </li>
            <li className='cursor-pointer hidden md:flex items-center justify-center mx-2 lg:mx-5 my-auto text-lg'>
                <button onMouseEnter={() => (setIsMoreBtn(!isMoreBtn))} onMouseLeave={() => (setIsMoreBtn(!isMoreBtn))} className='w-[40px] h-[40px] hidden md:flex items-center justify-center rounded-md hover:border  relative'>
                    <HiOutlineDotsVertical className='text-lg' />
                    {isMoreBtn ? <MoreBtn /> : ""}
                </button>
            </li>
        </ul>
    )
}

function LoginBtn() {
    return (
        <ul className='w-[250px] bg-white absolute left-0 top-[100%] shadow-[0px_0px_15px_rgba(0,0,0,0.2)] rounded-b'>
            <li className='px-4 py-2.5 flex justify-between text-black text-left text-[16px] border-b'>
                <span>New Customer?</span><span className='text-blue-500 font-semibold'>Sign Up</span>
            </li>
            <li className='px-2 py-2.5 flex items-center text-sm text-black text-left hover:bg-gray-50'>
                <FaRegUserCircle className='mx-1' />My Profile
            </li>
            <li className='px-2 py-2.5 flex items-center text-sm text-black text-left hover:bg-gray-50'>
                <BsPatchPlus className='mx-1' />Flipkart Plus Zone
            </li>
            <li className='px-2 py-2.5 flex items-center text-sm text-black text-left hover:bg-gray-50'>
                <RxCube className='mx-1' />Orders
            </li>
            <li className='px-2 py-2.5 flex items-center text-sm  text-black text-left hover:bg-gray-50'>
                <AiOutlineHeart className='mx-1' />Wishlist
            </li>
            <li className='px-2 py-2.5 flex items-center text-sm text-black text-left hover:bg-gray-50'>
                <AiOutlineGift className='mx-1' />Rewards
            </li>
            <li className='px-2 py-2.5 flex items-center text-sm text-black text-left hover:bg-gray-50'>
                <MdCardGiftcard className='mx-1' />Gift Cards
            </li>
        </ul>
    )
}

function MoreBtn() {
    return (
        <ul className='w-[200px] bg-white absolute right-0 top-[100%] shadow-[0px_0px_15px_rgba(0,0,0,0.2)] rounded-b hidden md:inline-block'>
            <li className='px-2 py-2.5 flex items-center text-sm text-black text-left hover:bg-gray-50'>
                <GoBell className='mx-1' />Notification Preferences
            </li>
            <li className='px-2 py-2.5 flex items-center text-sm text-black text-left hover:bg-gray-50'>
                <PiHeadsetLight className='mx-1' />24x7 Customer Care
            </li>
            <li className='px-2 py-2.5 flex items-center text-sm text-black text-left hover:bg-gray-50'>
                <PiTrendUp className='mx-1' />Advertise
            </li>
            <li className='px-2 py-2.5 flex items-center text-sm text-black text-left hover:bg-gray-50'>
                <MdOutlineFileDownload className='mx-1' />Download App
            </li>
        </ul>
    )
}