
import { AllPhotos } from '../../contants';
import "./Navbar.scss"
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {
    return (
            <header className="bg-[#D3D1DD] home-navbar md:h-[132px]">
                <div className="max-w-screen-2xl px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="flex justify-between pt-4">
                        <div className='logo-section'>
                            <span className="sr-only">Logo</span>
                            <Link to='/'>
                                <img className="w-[50%] pb-6 md:pb-0 md:w-full" src={AllPhotos.Logo} alt="royal stock logo" /></Link>
                        </div>

                        <div className="link-section md:w-[60%] md:grid">
                            <div className="hidden md:flex justify-end translator-div w-full">
                                <div id='translator'></div>
                            </div>

                            <nav className="hidden md:block" aria-labelledby="header-navigation">
                                <h2 className="sr-only" id="header-navigation">Navbar Links</h2>

                                <ul className="flex justify-between items-end gap-6 h-full ">
                                    <li>
                                        <NavLink to="/" className={({isActive}) => isActive ? "active-link" : "not-active"}>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about"
                                                 className={({isActive}) => isActive ? "active-link" : "not-active"}
                                        >About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/faq"
                                                 className={({isActive}) => isActive ? "active-link" : "not-active"}
                                        >FAQ</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact"
                                                 className={({isActive}) => isActive ? "active-link" : "not-active"}
                                        >Contact</NavLink>
                                    </li>

                                </ul>
                            </nav>

                            <div className="block md:hidden flex justify-end pt-3">
                                <button
                                    className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

    )
}

export default Navbar;