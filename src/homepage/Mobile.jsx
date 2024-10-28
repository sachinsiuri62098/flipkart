import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ProductList from '../jsonData/ProductList.json'
import ProductCard from '../components/ProductCard'
import { MdKeyboardArrowRight, } from "react-icons/md"
import { Link } from 'react-router-dom'
import Book_Now from '../assets/book_now1.webp'

function Mobile() {
    // Responsive card slider
    const res = {
        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 2
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 4,
            slidesToSlide: 2
        },
        tablet: {
            breakpoint: { max: 768, min: 640 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1
        }
    };
    // Mobiles_Tablets array data
    const Mobiles = ProductList.filter((curElem) => { return curElem.category === 'mobile' })
    const Mobile_Data = Mobiles.slice(0, 8)

    return (
        <div className='w-full h-[340px] flex justify-between my-4'>
            <div className='w-[1100px]  py-3 me-2 bg-white '>
                <div className='flex justify-between px-5 py-2'>
                    <h2 className='text-xl font-bold'>Top Mobile's Deals</h2>
                    <Link to={'/mobiles'}>
                        <button className='bg-blue-500 rounded-full w-[25px] h-[25px] ps-1 text-white text-lg'><MdKeyboardArrowRight /></button>
                    </Link>
                </div>
                <Carousel responsive={res} removeArrowOnDeviceType={["tablet", "mobile"]}>
                    {Mobile_Data.map((values) => (
                        <Link to={`/productdetails/${values.id}`} key={values.id} >
                            <ProductCard product={values} />
                        </Link>
                    ))}
                </Carousel>
            </div >
            <div className='w-[260px] h-full bg-red-500 '>
                <img src={Book_Now} alt="" className='w-full h-full cursor-pointer' />
            </div>
        </div>
    );
}
export default Mobile;

