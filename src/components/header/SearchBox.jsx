import { IoSearch } from "react-icons/io5";

function SearchBox() {
    return (
        <div className='w-full hidden lg:inline-block my-auto'>
            <div className='my-auto flex text-black'>
                <button className='h-[35px] ps-3 pe-1 bg-sky-50 text-lg rounded-l-md'>
                    <IoSearch />
                </button>
                <input type="text" placeholder='Search for Products, Brands and More' className='bg-sky-50 w-full h-[35px] px-2 py-4 rounded-r-md outline-none text-md font-light' />
            </div>
        </div>
    )
}

export default SearchBox