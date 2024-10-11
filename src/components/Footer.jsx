import React from 'react'
import { PiStorefrontBold, PiShootingStar, PiGiftThin, PiCopyrightLight, PiFacebookLogo } from "react-icons/pi";
import { TfiHelpAlt } from "react-icons/tfi";
import Card from '../assets/bankcards.png'
import { RiTwitterXLine } from "react-icons/ri";
import { LuYoutube } from "react-icons/lu";

function Footer() {
    return (
        <>
            <footer className='w-full bg-[#212121]'>
                <Footer_Top />
                <Footer_Bottom />
            </footer>
        </>
    )
}
export default Footer

function Footer_Top() {
    return (
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:flex justify-around py-12 p-8 border-b border-gray-500'>
            <About />
            <Group />
            <Help />
            <Customer />
            <Mail />
            <Reg_Office />
        </div>
    )
}

function About() {
    return (
        <div>
            <h5 className='text-gray-500 text-sm '>ABOUT</h5>
            <ul className='text-white text-[12px] font-semibold'>
                <li className='hover:underline cursor-pointer'>Contact Us</li>
                <li className='hover:underline cursor-pointer'>About Us</li>
                <li className='hover:underline cursor-pointer'>Careers</li>
                <li className='hover:underline cursor-pointer'>Flipkart Stories</li>
                <li className='hover:underline cursor-pointer'>Press</li>
                <li className='hover:underline cursor-pointer'>Corporate Information</li>
            </ul>
        </div>
    )
}

function Group() {
    return (
        <div>
            <h5 className='text-gray-500 text-sm '>GROUP COMPANIES</h5>
            <ul className='text-white text-[12px] font-semibold'>
                <li className='hover:underline cursor-pointer'>Myntra</li>
                <li className='hover:underline cursor-pointer'>Cleartrip</li>
                <li className='hover:underline cursor-pointer'>Shopsy</li>
            </ul>
        </div>
    )
}

function Help() {
    return (
        <div>
            <h5 className='text-gray-500 text-sm '>HELP</h5>
            <ul className='text-white text-[12px] font-semibold'>
                <li className='hover:underline cursor-pointer'>Payment</li>
                <li className='hover:underline cursor-pointer'>Shipping</li>
                <li className='hover:underline cursor-pointer'>Cencellation & Returns</li>
                <li className='hover:underline cursor-pointer'>FAQ</li>
                <li className='hover:underline cursor-pointer'>Report Infringement</li>
            </ul>
        </div>
    )
}

function Customer() {
    return (
        <div>
            <h5 className='text-gray-500 text-sm '>CUSTOMER POLICY</h5>
            <ul className='text-white text-[12px] font-semibold'>
                <li className='hover:underline cursor-pointer'>Cencellation & Returns</li>
                <li className='hover:underline cursor-pointer'>Terms of Use</li>
                <li className='hover:underline cursor-pointer'>Securityt</li>
                <li className='hover:underline cursor-pointer'>Privacy</li>
                <li className='hover:underline cursor-pointer'>Sitemap</li>
                <li className='hover:underline cursor-pointer'>Grievance Redressal</li>
                <li className='hover:underline cursor-pointer'>ERP Compliance</li>
            </ul>
        </div>
    )
}

function Mail() {
    return (
        <div className='xl:border-l xl:border-gray-500 xl:ps-6'>
            <h5 className='text-gray-500 text-sm '>Mail Us:</h5>
            <ul className='text-white text-[12px] font-semibold'>
                <li className='cursor-default'>Flipkart Internet Private Limited,</li>
                <li className='cursor-default'>Buildings Alyssa, Begonia &</li>
                <li className='cursor-default'>Clove Embassy Tech Village,</li>
                <li className='cursor-default'>Outer Ring Road, Devarabeesanahalli Village,</li>
                <li className='cursor-default'>Bengaluru, 560103</li>
                <li className='cursor-default'>Karnataka, India</li>
            </ul>
            <div className='mt-2'>
                <h5 className='text-gray-500 text-sm '>Social:</h5>
                <ul className='text-white text-2xl mt-2 flex items-center font-semibold'>
                    <li className='cursor-pointer'><PiFacebookLogo /></li>
                    <li className='cursor-pointer mx-3 text-xl'><RiTwitterXLine /></li>
                    <li className='cursor-pointer'><LuYoutube /></li>
                </ul>
            </div>

        </div>
    )
}

function Reg_Office() {
    return (
        <div>
            <h5 className='text-gray-500 text-sm '>Registered Office address:</h5>
            <ul className='text-white text-[12px] font-semibold'>
                <li className='cursor-default'>Flipkart Internet Private Limited,</li>
                <li className='cursor-default'>Buildings Alyssa, Begonia &</li>
                <li className='cursor-default'>Clove Embassy Tech Village,</li>
                <li className='cursor-default'>Outer Ring Road, Devarabeesanahalli Village,</li>
                <li className='cursor-default'>Bengaluru, 560103</li>
                <li className='cursor-default'>Karnataka, India</li>
                <li className='cursor-default'>CIN : U51109KA2012PTC066107</li>
                <li className='cursor-default'>
                    Telephone : <a href='' className='text-blue-700'>044-45614700</a> / <a href='' className='text-blue-700'>044-67415800</a>
                </li>
            </ul>
        </div>
    )
}

function Footer_Bottom() {
    return (
        <ul className='text-white text-[12px] font-semibold py-4 px-8 grid grid-cols-1 md:grid-cols-3 lg:flex justify-around'>
            <li className='cursor-pointer flex items-center my-2'>
                <PiStorefrontBold className='me-1 text-yellow-400' />Become a Seller
            </li>
            <li className='cursor-pointer flex items-center my-2'>
                <PiShootingStar className='me-1 text-yellow-400' />Advertise
            </li>
            <li className='cursor-pointer flex items-center my-2'>
                <PiGiftThin className='me-1 text-yellow-400' />Gift Card
            </li>
            <li className='cursor-pointer flex items-center my-2'>
                <TfiHelpAlt className='me-1 text-yellow-400' />Help Center
            </li>
            <li className='cursor-pointer flex items-center my-2'>
                <PiCopyrightLight className='me-1' />2007-2024 Flipkart.com
            </li>
            <li className='cursor-pointer flex items-center my-2'>
                <img src={Card} alt="" />
            </li>
        </ul>
    )
}