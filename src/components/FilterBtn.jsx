import React from 'react'

function FilterBtn(props) {
    return (
        <div className='flex items-center'>
            <input type='radio' name='filter' id={props.Id} onChange={props.Function} value={props.Values} className='cursor-pointer' /> 
            <label htmlFor={props.Id} className='ms-2 cursor-pointer'>{props.btnName}</label>
        </div>
    )
}

export default FilterBtn
