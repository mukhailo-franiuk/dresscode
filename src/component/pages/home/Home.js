import { Link } from "react-router-dom";

const Home = () => {
    document.title = `Home page App`;
    return (
        <div className="flex flex-col">
            <section className="bg-green-600">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
                    <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta tempora aliquid nisi, deleniti expedita perferendis sapiente
                        vel similique ullam odio sit omnis distinctio perspiciatis, enim quo dolore consequuntur! Voluptas, quae.</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <Link to={`/sing-up`} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-800 hover:bg-green-900 focus:ring-4 focus:ring-blue-300">
                            Get started
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="flex flex-col">
                <h1 className="text-xl md:text-5xl my-2 md:my-5 md:pl-10 border-b border-green-600 pb-3">Best del</h1>
                <div className="w-full flex justify-center items-center flex-wrap p-4">


                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}
export default Home;