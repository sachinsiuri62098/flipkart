import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ProductList from '../../jsonData/ProductList.json'
import ProductCard from '../../components/ProductCard'
import { MdKeyboardArrowRight, } from "react-icons/md"
import { Link } from 'react-router-dom'

const Fashion = () => {
    // Responsive card slider
    const res = {
        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
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
    // Fashion array data
    const Fashion = ProductList.filter((curElem) => { return curElem.category === 'fashion' })
    const Fashion_Data = Fashion.slice(0, 8)

    return (
        <div className='w-full bg-white py-3'>
            <div className='flex justify-between px-5 py-2'>
                <h2 className='text-xl font-bold'>Top Fashion's Deals</h2>
                <Link to={'/fashion'}>
                    <button className='bg-blue-500 rounded-full w-[25px] h-[25px] ps-1 text-white text-lg'><MdKeyboardArrowRight /></button>
                </Link>
            </div>
            <Carousel responsive={res} removeArrowOnDeviceType={["tablet", "mobile"]}>
                {Fashion_Data.map((values) => (
                    <Link to={`/productdetails/${values.id}`} key={values.id} >
                        <ProductCard product={values} />
                    </Link>
                ))}
            </Carousel>
        </div >
    );
}
export default Fashion;

