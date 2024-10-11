import React from 'react'

function FilterBtn(props) {
    return (
        <button onClick={props.Function} className='w-28 md:w-full bg-gray-200 rounded py-1 text-gray-700 mb-2 focus:bg-yellow-500 focus:text-white'>
            {props.btnName}</button>
    )
}

export default FilterBtn
