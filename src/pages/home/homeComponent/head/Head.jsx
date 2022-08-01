import React from 'react';
// import "./Head.scss"
import { Link } from 'react-router-dom';
import HomeImage from '../../../../assets/home.png';


const Head = () => {
    return (
    <section className="relative bg-white">
        <img src={HomeImage} alt="Staff having a meeting" className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full" />

        <div
            className="hidden sm:block sm:inset-0 sm:absolute"></div>

        <div className="relative max-w-screen-2xl px-4 sm:px-6 lg:px-8 mx-auto py-32 lg:h-[90vh] lg:items-center lg:flex">
            <div className="max-w-3xl text-center sm:text-left">
                <h1 className="text-3xl font-extrabold sm:text-5xl tracking-[0.05em] text-[#FFF80A]">
                    SECURED <span className="text-white">CRYPTOCURRENCY</span> TRADING COMPANY
                </h1>

                <p className="mt-4 italic sm:text-xl text-[#D3D1DD]">We provides always the best services for our clients  and always try
                    to acheive our client’s trust and satisfaction.
                </p>

                <div className="flex flex-wrap gap-4 mt-8 text-center">
                    <Link to="/signup" className="block w-full px-12 py-3 text-lg font-bold text-white rounded-[50px] shadow bg-[#231955] sm:w-auto focus:outline-none focus:ring-0 hover:invert-[.10]">
                        <button>
                            Create account
                        </button>
                    </Link>

                    <Link to="/signin" className="block w-full px-12 py-3 text-lg font-bold bg-white rounded-[50px] shadow text-[#231955] sm:w-auto focus:outline-none focus:ring-0 hover:invert-[.10]">
                        <button>
                            Sign in
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    </section>






    )
}

export default Head;