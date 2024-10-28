import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../jsonData/ProductList';
import { MdLocalOffer } from "react-icons/md";
import { RiCalendarCheckFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";

import { useDispatch } from 'react-redux'
import { AddCart } from '../redux_toolkit/CartSlice'

function ProductDetails() {

    const dispatch = useDispatch()

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const productData = ProductList.find((p) => p.id === parseInt(id));
        setProduct(productData);
    }, [id]);

    const Discount = Math.floor((product.old_price - product.new_price) / (product.old_price / 100))
    return (
        <div className='p-4 2xl:px-0 2xl:container 2xl:mx-auto' >
            <div className='w-full inline-block lg:flex justify-around p-4 bg-white'>
                <div className='w-full lg:w-3/5 '>
                    <div className=''>
                        <div className='flex justify-center items-center border py-4'>
                            <img src={product.image} className='w-[250px] md:w-[350px] h-[250px] md:h-[350px]' alt='product_img' />
                        </div>
                        <div className='mt-3 sm:flex justify-between'>
                            <button className='bg-yellow-300 py-2 md:py-4 w-full sm:w-1/2 me-2 mb-2 sm:mb-0 rounded-sm text-white font-semibold flex items-center justify-center hover:bg-yellow-400'
                            onClick={() => dispatch(AddCart(product))}>
                                <FaShoppingCart className='mx-2' /> ADD TO CART
                            </button>
                            <button className='bg-orange-400 py-2 md:py-4 w-full sm:w-1/2  rounded-sm text-white font-semibold flex items-center justify-center hover:bg-orange-500'>
                                <GiShoppingBag className='mx-2' />BUY NOW
                            </button>
                        </div>
                    </div>
                </div>
                {/* Product Details */}
                <div className='w-full px-4 py-4 md:py-0'>
                    <h3 className='font-light text-lg'>{product.product_name}</h3>
                    <p className='text-green-600 font-semibold'>Special Price</p>
                    <div className='inline-block md:flex items-end'>
                        <h1 className='text-2xl font-semibold me-2'>₹ {product.new_price}</h1>
                        <p className='text-slate-500 font-semibold me-2'><s>{product.old_price}</s></p>
                        <p className='text-green-600 font-semibold'>{Discount}% off</p>
                    </div>
                    <BankOffers />
                    <div className='inline-block md:flex mt-7'>
                        <p className='text-slate-500 font-semibold me-10'>Description</p>
                        <p className='text-slate-800 text-sm'>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails


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