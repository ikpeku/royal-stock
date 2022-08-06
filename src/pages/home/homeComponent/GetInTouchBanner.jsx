import React from 'react';
import {Link} from "react-router-dom";


const GetInTouchBanner = () => {
    return (
        <section className="mt-10 md:mt-0">
            <div className="max-w-[15rem] md:max-w-screen-2xl px-4 sm:px-6 lg:px-8 mx-auto xl:py-8 relative">

                <div className="text-center bg-[#231955] max-w-full md:max-w-2xl mx-auto">

                    <p className="text-lg md:text-4xl font-bold absolute left-0 right-0 mt-10">
                        Would <span className="text-white bg-[#231955]">you like to speak with our consultant</span>s first?
                    </p>

                    <Link to="/contact" className="mt-[7rem] md:mt-[6rem] mb-5 inline-block px-4 md:px-12 py-3 text-lg font-bold bg-white rounded-[50px] text-[#231955] sm:w-auto focus:outline-none focus:ring-0 hover:invert-[.10]">
                        <button>
                            Get in touch
                        </button>
                    </Link>
                </div>

            </div>
        </section>

    )
}

export default GetInTouchBanner;