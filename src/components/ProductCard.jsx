import React from 'react'

function ProductCard({ product }) {
    return (
        <div className='h-[250px] bg-white px-2 py-4 border rounded-md m-3 cursor-pointer text-center'>
            <img src={product.image} alt="" className='w-[145px] h-[145px] mx-auto py-2 hover:scale-[1.05]' />
            <h4 className='text-slate-600 font-semibold text-sm my-1'>{product.product_name.length > 35 ? product.product_name.substring(0, 35) + '...' : product.product_name}</h4>
            <h4 className='text-green-700 text-sm font-semibold font'>
                ₹ {product.new_price} <span className='text-green-700 ms-3'>{Math.floor((product.old_price - product.new_price) / (product.old_price / 100))}% off</span>
            </h4>
        </div>
    )
}

export default ProductCard

