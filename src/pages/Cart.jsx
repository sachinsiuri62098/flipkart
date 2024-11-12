import React from 'react'
import Layout from '../components/layout/Layout'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RemoveCart } from '../redux_toolkit/CartSlice'
import LoginImage from '../assets/login_cart.jpg'
import { Link } from 'react-router-dom'


function CartPage() {
    const { cart, totalAmount, totalDiscount } = useSelector(item => item.items)
    const dispatch = useDispatch()
    return (
        <Layout childern={
            <div>
                {cart.length > 0 ?
                    <div className='lg:flex px-4 2xl:px-0 2xl:container 2xl:mx-auto font-semibold' >
                        <div className='w-full h-auto my-4 me-5'>
                            <h2 className='py-2 px-3 bg-white'>Total {cart.length} items add in cart</h2>
                            {
                                cart.map((values) => {
                                    return (
                                        <div key={values.id} className='px-4 py-2 bg-white'>
                                            <div className='flex items-center justify-between w-full border rounded'>
                                                <div className='flex justify-center items-center py-2'>
                                                    <img src={values.image} alt="" className='w-[70px] h-[65px]' />
                                                </div>
                                                <div className='w-full sm:flex justify-between px-4 text-sm md:text-md'>
                                                    <h3 className='text-left'>
                                                        {values.product_name.length > 30 ? values.product_name.substring(0, 30) + '...' : values.product_name}
                                                    </h3>
                                                    <h4 className='text-green-600'>
                                                        <span className='text-slate-500 font-semibold me-2'>
                                                            <s>₹{values.old_price}</s>
                                                        </span>
                                                        <span>₹ {values.new_price}</span>
                                                    </h4>
                                                    <h4 className='text-green-600'>{Math.floor((values.old_price - values.new_price) / (values.old_price / 100))}% off</h4>
                                                    <button className='text-blue-400 hover:text-blue-600'
                                                        onClick={() => dispatch(RemoveCart(values))}>Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {/* PRICE DETAILS  */}
                        <div className='w-full lg:w-[500px] h-[300px] bg-white my-4' >
                            <div className='border-b py-3 px-3 text-gray-400'>
                                <h2 className='text-[15px]'>PRICE DETAILS</h2>
                            </div>
                            <div className='px-4 text-sm divide-y divide-dashed'>
                                <div className='font-normal text-gray-700'>
                                    <div className='py-2 flex justify-between'>
                                        <h4>Price({cart.length} Items)</h4>
                                        <h4 className=''>₹ {totalAmount}</h4>
                                    </div>
                                    <h4 className='py-2 flex justify-between'>Discount :
                                        <span className='text-green-600'>-₹ {totalDiscount}</span>
                                    </h4>
                                    <p className='py-2 flex justify-between'>Delivery Charges :
                                        <span>₹ {cart.length * 45}</span>
                                    </p>
                                </div>
                                <div className='py-4 flex justify-between  text-black text-md'>
                                    <h4 className=''>Total Amount :</h4>
                                    <span className='text-green-600'>₹ {totalAmount + cart.length * 45 - totalDiscount}</span>
                                </div>
                                <div>
                                    <button className='w-full bg-orange-400 py-2 text-white mt-4 hover:bg-orange-500 shadow rounded-sm'>
                                        PLACE ORDER</button>
                                </div>
                            </div>
                            <h2 className='text-green-600 pt-2 px-4 text-sm'>You will save ₹{totalDiscount} on this order</h2>
                        </div>
                    </div>
                    :
                    <div className='md:p-4 2xl:px-0 2xl:container 2xl:mx-auto' >
                        <div className='w-full me-2 bg-white text-center py-5'>
                            <img src={LoginImage} alt="" className='w-[200px] h-[130px] mx-auto my-3' />
                            <h4 className='text-md my-3'>Missing Cart items?</h4>
                            <p className='text-[12px] my-2'>Login to see the items you added previously Login</p>
                            <Link to={'/login'}>
                                <button className='w-[150px] bg-orange-500 py-1 text-white shadow rounded-sm my-3'>Login</button>
                            </Link>
                            <Link to={'/'}>
                                <p className='text-sm text-blue-500 hover:text-blue-600 font-semibold my-2'>Continue Shopping</p>
                            </Link>
                        </div>
                    </div>
                }
            </div>
        } />
    )
}

export default CartPage
