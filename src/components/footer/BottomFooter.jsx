import { PiStorefrontBold, PiShootingStar, PiGiftThin, PiCopyrightLight} from "react-icons/pi";
import { TfiHelpAlt } from "react-icons/tfi";
import Card from '../../assets/bankcards.png'

function BottomFooter() {
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

export default BottomFooter