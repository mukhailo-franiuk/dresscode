const SingUp = () => {
    document.title = `Create you office page App`;
    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-3xl md:text-4xl font-bold text-black">Add a new user</h2>
                <form>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
                            <input type="text" name="first-name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="First name" required/>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
                            <input type="text" name="last-name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Last name" required/>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 ">Country</label>
                            <input type="text" name="country" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="You country" required/>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">City</label>
                            <input type="text" name="city" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="You city" required/>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900">Age</label>
                            <input type="number" id="age" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="You age" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone number:</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                    </svg>
                                </div>
                                <input type="text" id="phone" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                            </div>
                            <p id="helper-text-explanation" className="mt-2 text-sm text-black">Select a phone number that matches the format.</p>

                        </div>
                    </div>
                    <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-600 rounded-lg focus:ring-4 focus:ring-green-200 hover:bg-green-800">
                        Add user
                    </button>
                </form>
            </div>
        </section>
    )
}
export default SingUp;