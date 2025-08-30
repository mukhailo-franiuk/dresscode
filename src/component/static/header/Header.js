import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
    const [showSearch , setShowSearch] = useState('hidden');
    const [showMobileMenu , setShowMobileMenu] = useState('hidden');
    const [showNavigation , setShowNavigation] = useState('hidden');
    const searchMobileOption = () => {
        if(showSearch === 'hidden'){
            setShowSearch('block');
            setShowMobileMenu('hidden');
            setShowNavigation('block');
        }else{
            setShowSearch('hidden');
            setShowMobileMenu('hidden');
            setShowNavigation('hidden');
        }
    }
    return (
        <nav className="bg-white border border-black">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={`/`} className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <img src="" className="h-8" alt="L" /> */}
                    <span className="self-center text-2xl text-black font-semibold whitespace-nowrap">Logotype</span>
                </Link>
                <div className="relative hidden md:block w-2/5">
                    <form className="max-w-md mx-auto w-full">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-black sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={`2`} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos..." required />
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                        </div>
                    </form>
                </div>
                <div className="flex md:order-2">
                    <button 
                    type="button" 
                    className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
                    onClick={searchMobileOption}
                    >
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={`2`} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>

                    <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={`2`} d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between w-full md:flex md:w-auto md:order-1">
                    <div className={`relative mt-3 md:hidden ${showSearch}`}>
                        <form className="max-w-md mx-auto w-full">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={`2`} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos..." required />
                        </div>
                    </form>
                    </div>
                    <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white`}>
                        <li>
                            <Link to={`/`} className="block py-2 px-3 text-black rounded-sm md:bg-transparent md:text-black md:p-0">Home</Link>
                        </li>
                        <li>
                            <Link to={`/dress`} className="block py-2 px-3 text-black rounded-sm md:bg-transparent md:text-black md:p-0">Dress</Link>
                        </li>
                        <li>
                            <Link to={`/contact`} className="block py-2 px-3 text-black rounded-sm md:bg-transparent md:text-black md:p-0">Contact</Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:ml-10 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <Link to={`/sing-in`} className="block py-2 px-3 text-red-600 rounded-sm md:bg-transparent md:text-red-600 md:p-0">Get started</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}
export default Header;