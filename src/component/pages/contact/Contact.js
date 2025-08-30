const Contact = () => {
    document.title = `Contact page App`;
    return (
        <div className="md:w-full">
            <div className="w-full">
                <h1 className="mb-4 text-5xl tracking-tight font-extrabold lg:text-6xl text-primary-600  text-center pt-7 pb-7">
                    Contact details and information about us
                </h1>
            </div>
            <div className="w-full mb-3 mb:mt-5 flex justify-center items-center flex-col">
                <div className="sm:w-11/12 md:w-4/5 lg:w-3/5 border-b border-black">
                    <p className="text-black">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A sunt delectus veniam commodi porro exercitationem et in architecto reiciendis distinctio. Ad officiis necessitatibus velit id animi sunt natus explicabo dolorem?
                    </p>
                    <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-red-600">
                        <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio est soluta ipsam blanditiis itaque quasi vel nostrum qui sequi atque
                            exercitationem, delectus provident incidunt obcaecati a reprehenderit rerum! Unde, ducimus.</p>
                    </blockquote>
                    <p className="text-black mb:pb-5 pb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit qui nesciunt eligendi a ut sunt commodi
                        veritatis minima maxime eaque molestiae sequi rerum id ad, rem accusamus quibusdam temporibus obcaecati.
                    </p>
                    <p className="text-black mb:pb-5 pb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit qui nesciunt eligendi a ut sunt commodi
                        veritatis minima maxime eaque molestiae sequi rerum id ad, rem accusamus quibusdam temporibus obcaecati.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit qui nesciunt eligendi a ut sunt commodi
                        veritatis minima maxime eaque molestiae sequi rerum id ad, rem accusamus quibusdam temporibus obcaecati.
                    </p>
                    <p className="text-black mb:pb-5 pb-3">
                       There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration 
                       in some form, by injected humour, or randomised words which don't look even slightly believable. If you are 
                       going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                        middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                        making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined 
                        with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated 
                        Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </p>
                </div>
            </div>
            <div className="w-full mt-3 mb:mt-5 flex justify-center items-center flex-col">
                <section className="sm:w-11/12 md:w-4/5 lg:w-3/5">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black">Contact Us</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                        <form className="space-y-8">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black ">Your email</label>
                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2" placeholder="name@flowbite.com" required />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black">Subject</label>
                                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Contact;