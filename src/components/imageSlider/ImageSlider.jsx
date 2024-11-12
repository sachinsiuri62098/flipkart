import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import SliderImage from '../../jsonData/SliderImage'

function ImageSlider() {
    const res = {
        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 768, min: 640 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1
        }
    };

    return (
        <div className='w-full bg-white shadow mt-3 mb-4 '>
            <Carousel responsive={res}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                infinite={true}
                autoPlay={true}
                dotListClass="custom-dot-list-style">
                {SliderImage.map((values) => (
                    <div key={values.id} className='w-full h-[90px] md:h-auto bg-white cursor-pointer'>
                        <img src={values.slide} alt="" className='w-full h-full' />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}


export default ImageSlider
