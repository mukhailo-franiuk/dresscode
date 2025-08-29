import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <footer className="bg-white w-full border border-black shadow-sm">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-black sm:text-center">© 2023 <Link to={`/`} className="hover:underline">Dresscode™</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black  sm:mt-0">
                    <li>
                        <Link to={`/about`} className="hover:underline me-4 md:me-6">About</Link>
                    </li>
                    <li>
                        <Link to={`/privacy`} className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to={`/licensing`} className="hover:underline me-4 md:me-6">Licensing</Link>
                    </li>
                    <li>
                        <Link to={`/contact`} className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;