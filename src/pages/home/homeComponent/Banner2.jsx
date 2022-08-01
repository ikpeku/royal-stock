import React from 'react';
import ComplexImg from "../../../assets/complex-3.png";


const Banner2 = () => {
    return (
        <section>
            <div className="max-w-screen-2xl px-4 sm:px-6 lg:px-8 mx-auto xl:py-16">
                <div className="relative">
                    <img src={ComplexImg} alt="Staff having a meeting" className="object-[75%] sm:object-[25%] object-cover w-[100%] h-[30vh] md:h-full" />

                    <p className="absolute top-7 md:top-10 right-0 px-8 md:px-0 md:max-w-lg text-sm md:text-xl font-bold italic text-[#FFFB84] md:leading-[35px]">
                        <span className="text-white">
                            Royal-st
                        </span>
                        <span className="text-[#231955]">
                            ock shell
                        </span>
                        is an asset management
                        company,managing assets accross a number of
                        diversified strategies.Our investment funds are
                        domiciled in Luxembourg, Norwayand Switzerland
                    </p>
                </div>
            </div>
        </section>

    )
}

export default Banner2;