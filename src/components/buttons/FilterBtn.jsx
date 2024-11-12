import React from 'react'

function FilterBtn(props) {
    return (
        <div className='flex items-center'>
            <input type='radio' name='filter' id={props.Id} onChange={props.Function} value={props.Values} className='cursor-pointer ms-3 me-2' /> 
            <label htmlFor={props.Id} className='cursor-pointer'>{props.btnName}</label>
        </div>
    )
}

export default FilterBtn
