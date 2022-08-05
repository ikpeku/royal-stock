import { useState } from 'react';
import { AllPhotos } from '../../contants';
import "./Navbar.scss"
import { NavLink, Link } from 'react-router-dom';
import { FiHome, FiMail, FiX } from "react-icons/fi";
import { RiUser3Fill } from "react-icons/ri";



const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <header className="bg-[#D3D1DD] home-navbar md:h-[132px] relative">
            <div className="max-w-screen-2xl px-4 sm:px-6 lg:px-8 mx-auto ">
                <div className="flex justify-between pt-4">

                    <div className='logo-section'>
                        <span className="sr-only">Logo</span>
                        {!toggle && <Link to='/'>
                            <img className="w-[50%] pb-6 md:pb-0 md:w-full" src={AllPhotos.Logo} alt="royal stock logo" />
                        </Link>}
                    </div>

                    <div className="link-section flex justify-end w-full md:w-[60%] md:grid relative">

                        <div className="hidden md:flex justify-end translator-div w-full">
                            <div id='translator'></div>
                        </div>

                        <nav className="hidden md:block" aria-labelledby="header-navigation">
                            {/* <h2 className="sr-only" id="header-navigation"></h2> */}

                            <ul className="flex justify-between items-end gap-10 h-full ">
                                <li className='mr-10'>
                                    <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "not-active"}>
                                        Home
                                    </NavLink>
                                </li>
                                <li className='mr-10'>
                                    <NavLink to="/about"
                                        className={({ isActive }) => isActive ? "active-link" : "not-active"}
                                    >About</NavLink>
                                </li>
                                <li className='mr-10'>
                                    <NavLink to="/faq"
                                        className={({ isActive }) => isActive ? "active-link" : "not-active"}
                                    >FAQ</NavLink>
                                </li>
                                <li className='mr-10'>
                                    <NavLink to="/contact"
                                        className={({ isActive }) => isActive ? "active-link" : "not-active"}
                                    >Contact</NavLink>
                                </li>
                                <li className='mr-10'>
                                    <NavLink to="/dashboard"
                                        className={({ isActive }) => isActive ? "active-link" : "not-active"}
                                    >Dashboard</NavLink>
                                </li>

                            </ul>
                        </nav>

                        {
                            !toggle && <div className="sm:block md:hidden flex justify-end pt-3">
                                <button
                                    className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75"

                                    onClick={() => setToggle(true)}
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
                        }

                        {toggle
                            && <div className='md:hidden'>
                                <FiX size={40} onClick={() => setToggle(false)}
                                    className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75"
                                />
                            </div>
                        }




                    </div>
                </div>
            </div>


            {
                toggle && <div className="min-h-screen bg-gray-100 absolute z-50 w-1/2 md:hidden" onClick={() => setToggle(false)}>
                    <div className="flex h-screen flex-col justify-between pt-2 pb-6">
                        <div>
                            <div className="w-max p-2.5">
                                <Link to="/" >
                                    <img src={AllPhotos.Logo} alt="royal stock logo" className="w-32" />
                                </Link>
                            </div>
                            <ul className="mt-6 space-y-2 tracking-wide">
                                <li className="min-w-max">
                                    <NavLink to="/" aria-label="dashboard"

                                        className={({ isActive }) => isActive ? "relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                                            : "bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600"
                                        }
                                        onClick={() => setToggle(false)}>

                                        <FiHome />
                                        <span className="-mr-1 font-medium">Home</span>
                                    </NavLink>
                                </li>
                                <li className="min-w-max">
                                    <NavLink to="/about"
                                        className={({ isActive }) => isActive ? "relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                                            : "bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600"
                                        }
                                        onClick={() => setToggle(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path className="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                                            <path className="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                                        </svg>
                                        <span className="group-hover:text-gray-700">About</span>
                                    </NavLink>
                                </li>
                                <li className="min-w-max">
                                    <NavLink to="/faq"
                                        className={({ isActive }) => isActive ? "relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                                            : "bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600"
                                        }
                                        onClick={() => setToggle(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path className="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                                            <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                                        </svg>
                                        <span className="group-hover:text-gray-700">FAQ</span>
                                    </NavLink>
                                </li>
                                <li className="min-w-max">
                                    <NavLink to="/contact"
                                        className={({ isActive }) => isActive ? "relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                                            : "bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600"
                                        }
                                        onClick={() => setToggle(false)}>
                                        <FiMail />
                                        <span className="group-hover:text-gray-700">Contact</span>
                                    </NavLink>
                                </li>
                                <li className="min-w-max">
                                    <NavLink to="/dashboard"
                                        className={({ isActive }) => isActive ? "relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                                            : "bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600"
                                        }
                                        onClick={() => setToggle(false)}>
                                        <RiUser3Fill />
                                        <span className="group-hover:text-gray-700">Dashboard</span>
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                     
                    </div>
                </div>
            }


        </header>

    )
}

export default Navbar;