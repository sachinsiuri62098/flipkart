import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import MobileList from '../jsonData/MobileList'
import FilterBtn from '../components/FilterBtn';

function Mobiles() {
    const [items, setItems] = useState(MobileList);
    const filterItem = (brandName) => {
        const updatedItem = MobileList.filter((curElem) => {
            return curElem.brands === brandName
        })
        setItems(updatedItem)
    };

    return (
        <div className='px-4 2xl:px-0 2xl:container 2xl:mx-auto' >
            <div className='w-full bg-white shadow py-3 my-4 '>
                <h1 className='text-center text-2xl py-5 font-semibold text-slate-950'>Top Mobile's Deals</h1>
                <div className='grid grid-cols-1 md:flex'>
                    <div className='w-full md:w-52 p-4 flex justify-around flex-wrap md:inline-block'>
                        <FilterBtn Function={() => setItems(MobileList)} btnName={'All Items'} />
                        <FilterBtn Function={() => filterItem('realme')} btnName={'Realme'} />
                        <FilterBtn Function={() => filterItem('samsung')} btnName={'Samsung'} />
                        <FilterBtn Function={() => filterItem('vivo')} btnName={'Vivo'} />
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

export default Mobiles
