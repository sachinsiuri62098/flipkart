import Logo from "./Logo"
import SearchBox from './SearchBox';
import NavLinks from "./NavLinks";

function Header() {
    return (
        <header className='w-full bg-white py-3 sticky top-0 z-50 shadow-sm md:shadow'>
            <div className='px-3 md:px-10 mx-auto flex relative' >
                <Logo />
                <SearchBox />
                <NavLinks />
            </div>
        </header>
    )
}

export default Header;

