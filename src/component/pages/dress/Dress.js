import { Link } from "react-router-dom";

const Dress = () => {
    document.title = `Dress page App`;
    return (
        <div className="w-full mt-10">
            <h1 className="mb-4 text-6xl tracking-tight font-extrabold lg:text-7xl text-primary-600 text-center">Large selection of clothing and accessories</h1>
            <div className="w-full mt-10">
                <nav className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-white">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <Link to={`/`} className="inline-flex items-center text-sm font-medium text-black hover:text-blue-600">
                                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Home
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 block w-3 h-3 mx-1 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={`2`} d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="ms-1 text-sm font-medium text-gray-400 md:ms-2">Dress</span>
                            </div>
                        </li>

                    </ol>
                </nav>
            </div>
            <div className="w-full">
                <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">Select your country</label>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option>Profile</option>
                        <option>Dashboard</option>
                        <option>setting</option>
                        <option>Invoioce</option>
                    </select>
                </div>
                <ul className="hidden text-sm font-medium text-center text-gray-500 bg-red-600 shadow-sm sm:flex">
                    <li className="w-full focus-within:z-10">
                        <Link to={`/`} className="inline-block w-full p-4 text-black bg-red-600 border-r border-gray-200 dark:border-gray-700 hover:text-white hover:bg-red-800 focus:ring-4 focus:ring-blue-300 active focus:outline-none">Man</Link>
                    </li>
                    <li className="w-full focus-within:z-10">
                        <Link to={`/`} className="inline-block w-full p-4 text-black bg-red-600 border-r border-gray-200 dark:border-gray-700 hover:text-white hover:bg-red-800 focus:ring-4 focus:ring-blue-300 active focus:outline-none">Woman</Link>
                    </li>
                    <li className="w-full focus-within:z-10">
                        <Link to={`/`} className="inline-block w-full p-4 text-black bg-red-600 border-r border-gray-200 dark:border-gray-700 hover:text-white hover:bg-red-800 focus:ring-4 focus:ring-blue-300 active focus:outline-none">Kidz</Link>
                    </li>
                    <li className="w-full focus-within:z-10">
                        <Link to={`/`} className="inline-block w-full p-4 text-black bg-red-600 border-r border-gray-200 dark:border-gray-700 hover:text-white hover:bg-red-800 focus:ring-4 focus:ring-blue-300 active focus:outline-none">Accessories</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Dress;