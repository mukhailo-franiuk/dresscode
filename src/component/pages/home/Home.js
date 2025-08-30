import { Link } from "react-router-dom";

const Home = () => {
    document.title = `Home page App`;
    return (
        <div className="w-full justify-center items-center">
            <div className="bg-red-600 hite w-full">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
                    <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                         itaque facilis? Quasi, beatae est libero ex animi odit nostrum exercitationem rerum tempora soluta totam aut, enim veritatis culpa! Dignissimos, nostrum.</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <Link to={`/`} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-gray-800 focus:ring-4 focus:ring-blue-100">
                            Get started
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={`2`} d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full mt-10 pt-10 pb-10 border-b border-black">
                 <h1 className="mb-4 text-5xl tracking-tight font-extrabold lg:text-6xl text-primary-600  text-center">Large selection of clothing and accessories</h1>
            </div>
        </div>
    )
}
export default Home;