import { MdLocalOffer } from "react-icons/md";
import { RiCalendarCheckFill } from "react-icons/ri";

function BankOffers() {
    return (
        <ul>
            <li className='text-md my-2 font-semibold'>Available offers</li>
            <li className='text-sm my-2 flex items-center'>
                <MdLocalOffer className='text-green-500 me-2 text-[16px]' />
                <span className='font-semibold'>Bank Offer</span>
                5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C
            </li>
            <li className='text-sm my-2 flex items-center'>
                <MdLocalOffer className='text-green-500 me-2 text-[16px]' />
                <span className='font-semibold'>Special Price</span>
                <p>Get extra 27% off (price inclusive of cashback/coupon) T&C</p>
            </li>
            <li className='text-sm my-2 flex items-center'>
                <MdLocalOffer className='text-green-500 me-2 text-[16px]' />
                <span className='font-semibold'>Partner Offer</span>
                Make a purchase and enjoy a surprise cashback/ coupon that you can redeem later! Know More
            </li>
            <li className='text-[12px] md:text-sm my-2 flex items-center'>
                <RiCalendarCheckFill className='text-green-500 me-2 text-[17px]' />
                No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999 T&C
            </li>
        </ul>
    )
}

export default BankOffers