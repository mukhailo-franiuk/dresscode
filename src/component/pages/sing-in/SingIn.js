import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const SingIn = () => {
    document.title = `Sing in page App`;
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const checkUsers = (data) => console.log(data);
    
    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg border-2 shadow  md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-4xl">
                            Sing in
                        </h1>
                        <form 
                        className="space-y-4 md:space-y-6" 
                        onSubmit={handleSubmit(checkUsers)}
                        >
                            <div>
                                <label htmlFor="login" className="block mb-2 text-sm font-medium text-black">Your login</label>
                                <input 
                                type="text" 
                                name="login" 
                                id="login" 
                                className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required 
                                {...register('login_user')}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">Password</label>
                                <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="••••••••" 
                                className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                                required 
                                {...register('password_user')}
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-600">I accept the <Link className="font-medium text-black hover:text-green-600 hover:underline ">Terms and Conditions</Link></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                            <p className="text-sm font-light text-gray-600 ">
                                No account yet? <Link to={`/sing-up`} className="font-medium text-black hover:text-green-600 hover:underline">Sing up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SingIn;