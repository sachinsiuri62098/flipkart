import React from 'react'

function ProductCard(props) {
    return (
        <div className='h-[250px] bg-white px-2 py-4 border rounded-md m-3 cursor-pointer text-center'>
            <img src={props.Image} alt="" className='w-[140px] h-[130px] mx-auto mb-1 hover:scale-[1.05]' />
            <h4 className='text-slate-600 font-semibold text-sm'>{props.Title}</h4>
            <h4 className='text-green-700 text-sm font-semibold font'>₹ {props.Price}</h4>
            <p className='text-green-700 text-sm font-semibold font'>{props.Offer}</p>
        </div>
    )
}

export default ProductCard

