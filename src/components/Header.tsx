import { FaPerson } from "react-icons/fa6";
import { FaFaceGrinHearts } from "react-icons/fa6";
import { BsBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppSelector } from "../store/hooks";


const Header = () => {

 const navLinks = ["Men", "Women", "Kids", "Home", "Living", "Beauty", "Studio"]

const bag = useAppSelector((store) => store.bag)
const [menuOpen, setMenuOpen] = useState(false);

    return(
         <header className="sticky top-0 z-50 border-b border-gray-300 bg-white">
            {/* Top row */}
            <div className="flex items-center justify-between gap-4 px-4 py-2 lg:py-0 lg:h-20 lg:px-[4%]">
                {/* Hamburger + Logo */}
                <div className="flex items-center gap-3">
                    <button className="text-2xl lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? "x" : "☰"}</button>
                </div>
            
        <div>
            <Link to="/"><img className="h-9 sm:h-14" src="/images/image-web.jpg" alt="Myntra Home"/></Link>
        </div>
        {/* Desktop nav */}
        <nav className="hidden gap-6 lg:flex xl:gap-8">
        {navLinks.map((name) => (
            <a key={name} href="#" className="border-b-4 border-transparent py-7 text-sm font-bold uppercase tracking-wide text-[#282c3f] hover:border-[#f54e77]">
            {name}
            {name === "Studio" && (
                <sup className="ml-0.5 text-[10px] text-[#ff3f6c]">New</sup>
            )}
            </a>
            ))}
        </nav>
        {/* desktop search */}
        <div className="hidden h-10 w-[30%] `min-w-[200px]` items-center overflow-hidden rounded bg-[#f5f5f6] lg:flex">
            <span className="material-symbols-outlined px-3 text-[#282c3f]">search</span>
            <input className="h-full flex-1 bg-transparent pr-3 text-sm text-[#696e79] outline-none" placeholder="Search for products, brands and more"/>
        </div>
        
        {/* mobile menu */}
        <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex flex-col items-center text-xl">
                <FaPerson />
                <span className="hidden text-sm sm:block">Profile</span>
            </div>

            <div className="flex flex-col items-center text-xl">
                <FaFaceGrinHearts />
                <span className="hidden text-sm sm:block">Wishlist</span>
            </div>

            <Link className="relative flex flex-col items-center text-xl text-black no-underline" to="/bag">
                <BsBagFill />
                <span className="hidden text-sm sm:block">Bag</span>
                <span className="absolute -right-3 -top-2 flex `h-4.5` `min-w-[18px]` items-center justify-center rounded-full bg-[#f16565] px-1 text-xs font-bold text-white">{bag.length}</span>
            </Link>
        </div>
        </div>
        {/* mobile search */}
        <div className="px-4 pb-3 lg:hidden">
            <div className="flex h-10 items-center overflow-hidden rounded bg-[#f5f5f6]">
                <span className="material-symbols-outlined px-3 text-sm text-[#282c3f]">search</span>
                <input className="h-full flex-1 bg-transparent pr-3 text-sm text-[#696e79] outline-none" placeholder="Search for products, brands and more" />
            </div>
        </div>
        {/* mobile menu */}
        {menuOpen && (
            <nav className="flex flex-col border-t border-gray-200 lg:hidden">
                {navLinks.map((name)=> (
                    <a key={name} href="#" className="border-b border-gray-100 px-5 py-3 text-sm font-bold uppercase text-[#282c3f] hover:bg-gray-50" onClick={() => setMenuOpen(false)}>{name}</a>
                ))}
            </nav>
        )}
    </header>
    );
};

export default Header;