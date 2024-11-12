import React from 'react'
import Error_icom from '../assets/error404.png'
import { Link } from 'react-router-dom'

function Error_404() {
    return (
        <div>
            <Link to={'/'} className='px-3 py-1 bg-blue-500 rounded-sm text-white absolute m-4'>Go Back</Link>
            <div className='w-full h-[100vh] bg-white flex flex-col justify-center items-center py-32'>
                <img src={Error_icom} alt="" className='w-52 h-52 my-8' />
            </div>

        </div>
    )
}

export default Error_404
