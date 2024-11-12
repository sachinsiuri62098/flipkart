import flipCartLogo from "../../assets/flipkart-logo.png"
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

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

export default Logo