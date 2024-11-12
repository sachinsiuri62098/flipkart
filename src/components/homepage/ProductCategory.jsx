import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ProductCateList from '../../jsonData/ProductCategoryList'
import { Link } from 'react-router-dom'

function ProductCategory() {
    // Responsive category slider
    const res = {
        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 10
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 768, min: 640 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 3
        }
    }
    return (
        <div className='w-full bg-white shadow md:mt-2 md:mb-4 py-4'>
            <Carousel responsive={res} removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}>
                {ProductCateList.map((values) => (
                    <Link to={values.link} key={values.id}>
                        <div className='w-auto bg-white cursor-pointer'>
                            <img src={values.image} alt="" className='w-[65px] h-[65px] mx-auto mb-2' />
                            <h4 className='text-slate-600 font-semibold text-sm text-center'>{values.tittle}</h4>
                        </div>
                    </Link>
                ))}
            </Carousel>
        </div>
    )
}

export default ProductCategory;