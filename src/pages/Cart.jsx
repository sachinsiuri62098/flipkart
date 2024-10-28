import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RemoveCart } from '../redux_toolkit/CartSlice'


function CartPage() {
    const { cart, total_amount, total_discount } = useSelector(item => item.items)
    const dispatch = useDispatch()
    return (
        <div className='lg:flex px-4 2xl:px-0 2xl:container 2xl:mx-auto font-semibold' >
            <div className='w-full h-auto bg-white shadow p-3 my-4 me-5'>
                <h2 className='py-2'>Total {cart.length} items add in cart</h2>
                {
                    cart.map((values) => {
                        return (
                            <div key={values.id} className='flex items-center justify-between w-full border rounded my-3 p-1 bg-white'>
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
                        )
                    })
                }
            </div>

            {/* PRICE DETAILS  */}
            <div className='w-full lg:w-[500px] h-[300px] bg-white shadow my-4' >
                <div className='border-b py-3 px-3 text-gray-400'>
                    <h2 className='text-[15px]'>PRICE DETAILS</h2>
                </div>
                <div className='px-4 text-sm divide-y divide-dashed'>
                    <div className='font-normal text-gray-700'>
                        <div className='py-2 flex justify-between'>
                            <h4>Price({cart.length} Items)</h4>
                            <h4 className=''>₹ {total_amount}</h4>
                        </div>
                        <h4 className='py-2 flex justify-between'>Discount :
                            <span className='text-green-600'>-₹ {total_discount}</span>
                        </h4>
                        <p className='py-2 flex justify-between'>Delivery Charges :
                            <span>₹ {cart.length * 45}</span>
                        </p>
                    </div>
                    <div className='py-4 flex justify-between  text-black text-md'>
                        <h4 className=''>Total Amount :</h4>
                        <span className='text-green-600'>₹ {total_amount + cart.length * 45 - total_discount}</span>
                    </div>
                    <div>
                        <button className='w-full bg-orange-400 py-2 text-white mt-4 hover:bg-orange-500 shadow rounded-sm'>
                            PLACE ORDER</button>
                    </div>
                </div>
                <h2 className='text-green-600 pt-2 px-4 text-sm'>You will save ₹{total_discount} on this order</h2>
            </div>
        </div>
    )
}

export default CartPage
