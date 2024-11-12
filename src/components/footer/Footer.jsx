import React from 'react'
import About from './About';
import Group from './Group';
import Help from './Help';
import Customer from './Customer';
import Mail from "./Mail"
import RegOffice from './RegOffice';
import BottomFooter from './BottomFooter';

function Footer() {
    return (
        <>
            <footer className='w-full bg-[#212121]'>
                <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:flex justify-around py-12 p-8 border-b border-gray-500'>
                    <About />
                    <Group />
                    <Help />
                    <Customer />
                    <Mail />
                    <RegOffice />
                </div>
                <div>
                    <BottomFooter />
                </div>
            </footer>
        </>
    )
}
export default Footer








