import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
    const [navigation, setNavigation] = useState('hidden');
    const [menu, setMenu] = useState('hidden');
    const configMenu = () => {
        if (menu === 'hidden') {
            setMenu('block');
        } else {
            setMenu('hidden');
            setNavigation('hidden');
        }
    }
    const closeAllWindow = () => {
        setMenu('hidden');
        setNavigation('hidden');
    }
    return (
        <nav className="bg-white border-b border-green-600">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link to={`/`} className="flex items-center space-x-3 rtl:space-x-reverse"
                    onClick={closeAllWindow}
                >
                    {/* <img src="" class="h-8" alt="Logo" /> */}
                    <span className="self-center text-black text-2xl font-semibold whitespace-nowrap">Dresscode</span>
                </Link>
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    onClick={configMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`items-center justify-between ${menu} w-full md:flex md:w-auto md:order-1`}>
                    <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                        <li>
                            <Link
                                to={`/`}
                                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 "
                                onClick={closeAllWindow}
                            >Home</Link>
                        </li>
                        <li>
                            <button
                                className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0"
                                onClick={() => (navigation === 'hidden') ? setNavigation('block') : setNavigation('hidden')}
                            >
                                Goods
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                        </li>
                        <li>
                            <Link
                                to={`/contact`}
                                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0"
                                onClick={closeAllWindow}
                            >Contact</Link>
                        </li>
                        <li>
                            <Link
                                to={`/about`}
                                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0"
                                onClick={closeAllWindow}
                            >About</Link>
                        </li>
                        <li>
                            <Link
                                to={`/sing-in`}
                                className="block py-2 px-3 bg-green-400 md:bg-transparent text-black md:text-green-400 border-b hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0"
                                onClick={closeAllWindow}
                            >Sing In</Link>
                        </li>
                        <li>
                            <Link
                                to={`/sing-up`}
                                className="block py-2 px-3 bg-green-400 md:bg-transparent text-black md:text-green-600 border-b hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0"
                                onClick={closeAllWindow}
                            >Sing Up</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`mt-1 bg-black border-gray-200 shadow-xs border-y ${navigation}`}>
                <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
                    <ul aria-labelledby="mega-menu-full-dropdown-button">
                        <li>
                            <Link
                                to={`/`}
                                className="block p-3 rounded-lg hover:bg-green-600"
                                onClick={closeAllWindow}
                            >
                                <div className="font-semibold">Online Stores</div>
                                <span className="text-sm text-white">Connect with third-party tools that you're already using.</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={`/`}
                                className="block p-3 rounded-lg hover:bg-green-600"
                                onClick={closeAllWindow}
                            >
                                <div className="font-semibold">Segmentation</div>
                                <span className="text-sm text-white ">Connect with third-party tools that you're already using.</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={`/`}
                                className="block p-3 rounded-lg hover:bg-green-600"
                                onClick={closeAllWindow}
                            >
                                <div className="font-semibold">Marketing CRM</div>
                                <span className="text-sm text-white">Connect with third-party tools that you're already using.</span>
                            </Link>
                        </li>
                    </ul>
                    <ul aria-labelledby="mega-menu-full-dropdown-button">
                        <li>
                            <Link
                                to={`/`}
                                className="block p-3 rounded-lg hover:bg-green-600"
                                onClick={closeAllWindow}
                            >
                                <div className="font-semibold">Online Stores</div>
                                <span className="text-sm text-white">Connect with third-party tools that you're already using.</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={`/`}
                                className="block p-3 rounded-lg hover:bg-green-600"
                                onClick={closeAllWindow}
                            >
                                <div className="font-semibold">Segmentation</div>
                                <span className="text-sm text-white ">Connect with third-party tools that you're already using.</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={`/`}
                                className="block p-3 rounded-lg hover:bg-green-600"
                                onClick={closeAllWindow}
                            >
                                <div className="font-semibold">Marketing CRM</div>
                                <span className="text-sm text-white">Connect with third-party tools that you're already using.</span>
                            </Link>
                        </li>
                    </ul>
                    <ul aria-labelledby="mega-menu-full-dropdown-button">
                        <li>
                            <Link
                                to={`/`}
                                className="block p-3 rounded-lg hover:bg-green-600"
                                onClick={closeAllWindow}
                            >
                                <div className="font-semibold">Online Stores</div>
                                <span className="text-sm text-white">Connect with third-party tools that you're already using.</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={`/`}
                                className="block p-3 rounded-lg hover:bg-green-600"
                                onClick={closeAllWindow}
                            >
                                <div className="font-semibold">Segmentation</div>
                                <span className="text-sm text-white ">Connect with third-party tools that you're already using.</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={`/`}
                                className="block p-3 rounded-lg hover:bg-green-600"
                                onClick={closeAllWindow}
                            >
                                <div className="font-semibold">Marketing CRM</div>
                                <span className="text-sm text-white">Connect with third-party tools that you're already using.</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
export default Header;