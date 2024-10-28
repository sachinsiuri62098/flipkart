import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import FilterBtn from '../components/FilterBtn'
import ProductList from '../jsonData/ProductList'
import { Link } from 'react-router-dom'

function Mobiles() {
    const Mobiles = ProductList.filter((curElem) => {
        return curElem.category === 'mobile' || curElem.category === 'Tablets'
    })
    // Get all brands in mobiles and tablets in array
    const brands = Mobiles.map((values) => { return values.brand })
    let Brands = ['All Items'];
    Brands.push(...new Set(brands))
    // Set brands in State
    const [selectBrands, setSelecteBrands] = useState('All Items')
    const handleBrands = (e) => { setSelecteBrands(e.target.value); };
    const filteredProducts = Mobiles.filter((product) => {
        return selectBrands === 'All Items' || product.brand === selectBrands;
    })

    return (
        <div className='px-4 2xl:px-0 2xl:container 2xl:mx-auto' >
            <div className='w-full bg-white shadow py-3 my-4 '>
                <h1 className='text-center text-2xl py-5 font-semibold text-slate-950'>Top Mobile's Deals</h1>
                <div className='grid grid-cols-1 md:flex'>
                    <div className='w-full md:w-60'>
                        <h3 className='bg-green-500 p-1 ps-4 font-semibold text-white'>Filter Products</h3>
                        <div className='w-full p-4 flex justify-around flex-wrap md:inline-block'>
                            {Brands.map((brand, index) => (
                                <FilterBtn Id={index} Function={handleBrands} Values={brand} btnName={brand} />
                            ))}
                        </div>
                    </div>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                        {filteredProducts.map((values) => (
                            <Link to={`/productdetails/${values.id}`}>
                                <ProductCard key={values.id} product={values} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobiles
