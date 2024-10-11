import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ProductCateList from "../jsonData/ProductCategoryList"
import ElectronicList from '../jsonData/ElectronicList'
import Fashionlist from '../jsonData/FashionList'
import MobileList from '../jsonData/MobileList'
import ProductCard from '../components/ProductCard'
import ImageSlider from '../components/ImageSlider'
import { MdKeyboardArrowRight, } from "react-icons/md"
import { Link } from 'react-router-dom'

function HomePage() {
    const res = {
        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 4
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

    return (
        <>
            <div className='px-4 2xl:px-0 2xl:container 2xl:mx-auto' >
                <ProductCategory />
                <ImageSlider />
                {/* =============Mobile Section============= */}
                <div className='w-full bg-white shadow py-3 my-4'>
                    <div className='flex justify-between px-5 py-2'>
                        <h2 className='text-xl font-bold'>Top Mobile's Deals</h2>
                        <Link to={'/mobiles'}>
                            <button className='bg-blue-500 rounded-full w-[25px] h-[25px] ps-1 text-white text-lg'><MdKeyboardArrowRight /></button>
                        </Link>
                    </div>
                    <Carousel responsive={res} removeArrowOnDeviceType={["tablet", "mobile"]}>
                        {MobileList.map((values) => (
                            <ProductCard Image={values.image} Title={values.name} Price={values.price} Offer={values.offer}  />
                        ))}
                    </Carousel>
                </div>
                {/* =============Fashion Section============= */}
                <div className='w-full bg-white shadow py-3 my-4'>
                    <div className='flex justify-between px-5 py-2'>
                        <h2 className='text-xl font-bold'>Top Fashion's Deals</h2>
                        <Link to={'/fashion'}>
                            <button className='bg-blue-500 rounded-full w-[25px] h-[25px] ps-1 text-white text-lg'><MdKeyboardArrowRight /></button>
                        </Link>
                    </div>
                    <Carousel responsive={res} removeArrowOnDeviceType={["tablet", "mobile"]}>
                        {Fashionlist.map((values) => (
                            <ProductCard Image={values.image} Title={values.name} Price={values.price} Offer={values.offer}  />
                        ))}
                    </Carousel>
                </div>
                {/* =============Electronic Section============= */}
                <div className='w-full bg-white shadow py-3 my-4'>
                    <div className='flex justify-between px-5 py-2'>
                        <h2 className='text-xl font-bold'>Best of Electronics</h2>
                        <Link to={'/electronics'}>
                            <button className='bg-blue-500 rounded-full w-[25px] h-[25px] ps-1 text-white text-lg'><MdKeyboardArrowRight /></button>
                        </Link>
                    </div>
                    <Carousel responsive={res} removeArrowOnDeviceType={["tablet", "mobile"]}>
                        {ElectronicList.map((values) => (
                            <ProductCard Image={values.image} Title={values.name} Price={values.price} Offer={values.offer}  />
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    );
}
export default HomePage;

function ProductCategory() {
    const res = {
        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 10
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 768, min: 640 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 3
        }
    }

    return (
        <div className='w-full bg-white shadow mt-3 mb-4 py-3.5'>
            <Carousel responsive={res} removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}>
                {ProductCateList.map((val) => (
                    <Link to={val.link}>
                        <div className='w-auto bg-white cursor-pointer'>
                            <img src={val.image} alt="" className='w-[65px] h-[65px] mx-auto mb-2' />
                            <h4 className='text-slate-600 font-semibold text-sm text-center'>{val.tittle}</h4>
                        </div>
                    </Link>
                ))}
            </Carousel>
        </div>
    )
}

