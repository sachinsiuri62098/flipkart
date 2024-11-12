import React from 'react'
import Layout from '../components/layout/Layout'
import ProductCategory from '../components/homepage/ProductCategory'
import ImageSlider from '../components/imageSlider/ImageSlider'
import Mobile from '../components/homepage/Mobile'
import Electronics from '../components/homepage/Electronics'

function HomePage() {
    return (
        <Layout childern={
            <div className='md:px-4 2xl:px-0 2xl:container 2xl:mx-auto' >
                <ProductCategory />
                <ImageSlider />
                <Mobile />
                <Electronics />
            </div>
        } />
    )
}

export default HomePage
