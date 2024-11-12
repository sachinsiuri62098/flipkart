import { RiTwitterXLine } from "react-icons/ri";
import { LuYoutube } from "react-icons/lu";
import { PiFacebookLogo } from "react-icons/pi";

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

export default Mail