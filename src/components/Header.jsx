import React, { useState } from 'react'
import flipCartLogo from "../assets/flipkart-logo.png"
import { AiOutlineHeart, AiOutlineGift } from "react-icons/ai";
import { FaRegUserCircle, FaBars } from "react-icons/fa";
import { MdCardGiftcard, MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineFileDownload } from "react-icons/md";
import { RxCube } from "react-icons/rx";
import { BsPatchPlus,BsCart3 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { PiStorefront, PiHeadsetLight, PiTrendUp } from "react-icons/pi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { GoBell } from "react-icons/go";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    return (
        <header className='w-full bg-white py-3 sticky top-0 z-50 shadow'>
            <div className='px-3 md:px-10 mx-auto flex relative' >
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
        <div className='w-[270px] my-auto md:ps-7 flex'>
            <button className='my-auto mx-3 lg:hidden'><FaBars /></button>
            <Link to={'/'}>
                <img src={flipCartLogo} alt="Website Logo" className='w-full h-[33px] cursor-pointer' />
            </Link>
        </div>
    )
}

function SearchBox() {
    return (
        <div className='w-full hidden sm:inline-block my-auto'>
            <div className='my-auto flex text-black'>
                <button className='h-[35px] ps-3 pe-1 bg-sky-50 text-lg rounded-l-md'>
                    <IoSearch />
                </button>
                <input type="text" placeholder='Search for Products, Brands and More' className='bg-sky-50 w-full h-[35px] px-2 py-4 rounded-r-md outline-none text-md font-light' />
            </div>
        </div>
    )
}

// ====================== Header Menu Link Section ====================== 
function Menu() {
    const { cart } = useSelector(item => item.items)

    const [isLoginBtn, setIsLoginBtn] = useState(false)
    const [isMoreBtn, setIsMoreBtn] = useState(false)
    return (
        <ul className='w-full lg:w-[900px] flex my-auto justify-around text-md font-light'>
            <li className='my-auto'>
                <Link to={'/login'} >
                    <button onMouseEnter={() => (setIsLoginBtn(!isLoginBtn))} onMouseLeave={() => (setIsLoginBtn(!isLoginBtn))} className='w-[100px] h-[35px] items-center justify-center rounded-md hover:bg-blue-600 hover:text-white hidden lg:flex relative'>
                        <FaRegUserCircle />
                        <span className='mx-1'>Login</span>
                        {isLoginBtn ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                        {isLoginBtn ? <LoginBtn /> : ""}
                    </button>
                    <button className='w-[100px] h-[35px] flex items-center justify-center rounded-md hover:bg-blue-600 hover:text-white relative lg:hidden'>
                        <FaRegUserCircle />
                        <span className='mx-1'>Login</span>
                        <MdKeyboardArrowDown />
                    </button>
                </Link>
            </li>
            <li className='ms-3 md:ms-0 my-auto'>
                <Link to={'/cart'}>
                    <button className='flex items-center justify-center relative'>
                        <BsCart3 className='me-1 text-lg' />
                        <span className='w-[17px] bg-red-400 rounded-full text-white text-[11px] -top-2 left-1.5 absolute'>
                            {cart.length < 1 ? "" : cart.length}
                        </span>
                        <span className='mx-1'>Cart</span>
                    </button>
                </Link>
            </li>
            <li className='my-auto'>
                <button className='hidden lg:flex items-center justify-center'>
                    <PiStorefront className='me-1' />
                    <span className='hidden xl:inline-block'>Become a Seller</span>
                </button>
            </li>
            <li className='cursor-pointer hidden lg:flex items-center justify-center'>
                <button onMouseEnter={() => (setIsMoreBtn(!isMoreBtn))} onMouseLeave={() => (setIsMoreBtn(!isMoreBtn))} className='w-[40px] h-[40px] hidden md:flex items-center justify-center rounded-md hover:border  relative'>
                    <HiOutlineDotsVertical />
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