import React from 'react'
import ProductCategory from './ProductCategory'
import ImageSlider from '../components/ImageSlider'
import Mobile from './Mobile'
import Electronics from './Electronics'
import Fashion from './Fashion'

function HomePage() {
    return (
        <div className='px-4 2xl:px-0 2xl:container 2xl:mx-auto' >
            <ProductCategory />
            <ImageSlider />
            <Mobile />
            <Electronics />
        </div>
    )
}

export default HomePage
