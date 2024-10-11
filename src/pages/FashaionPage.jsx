import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import Fashionlist from '../jsonData/FashionList'
import FilterBtn from '../components/FilterBtn'

function Fashion() {
    const [items, setItems] = useState(Fashionlist);
    const filterItem = (categoryName) => {
        const updatedItem = Fashionlist.filter((curElem) => {
            return curElem.category === categoryName
        })
        setItems(updatedItem)
    };

    return (
        <div className='px-4 2xl:px-0 2xl:container 2xl:mx-auto' >
            <div className='w-full bg-white shadow py-3 my-4 '>
                <h1 className='text-center text-2xl py-5 font-semibold text-slate-950'>Top Fashion's Deals</h1>
                <div className='grid grid-cols-1 md:flex'>
                    <div className='w-full md:w-52 p-4 flex justify-around flex-wrap md:inline-block'>
                        <FilterBtn Function={() => setItems(Fashionlist)} btnName={'All Items'} />
                        <FilterBtn Function={() => filterItem('t-shirt')} btnName={'T-Shirt'} />
                        <FilterBtn Function={() => filterItem('shirt')} btnName={'Shirt'} />
                        <FilterBtn Function={() => filterItem('kurta')} btnName={'Kurta'} />
                    </div>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                        {items.map((values) => (
                            <ProductCard Image={values.image} Title={values.name} Price={values.price} Offer={values.offer}  />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fashion
