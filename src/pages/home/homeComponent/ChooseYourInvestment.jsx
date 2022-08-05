import React from 'react';
import {Link} from "react-router-dom";

const ChooseYourInvestment = () => {
    return (
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-3xl lg:py-16 lg:px-6">

                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-2xl font-bold text-[#231955]">
                        CHOOSE YOUR INVESTMENT PLAN</h2>
                </div>

                <div className="lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-20">

                    <div
                        className="my-5 border-[4px] border-[#483F71] w-full flex flex-col p-6 mx-auto text-center text-[#231955] rounded-[20px] xl:p-8 h-full">
                        <h3 className="mb-4 text-2xl font-semibold">STARTER ACCOUNT</h3>

                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">20%</span>
                            <span className="font-bold">ROI</span>
                        </div>

                        <p className="text-xl font-bold">
                            AFTER 72 HOURS</p>

                        <ul className="mb-8 space-y-4 text-left mt-16 font-bold text-lg">
                            <li className="text-center space-x-3">
                                Mini Invest: $100
                            </li>
                            <li className="h-px bg-[#231955] w-[50%] mx-auto"></li>
                            <li className=" space-x-3 text-center">
                                Max Invest: $1,000
                            </li>

                        </ul>

                        <Link to="/signup" className="mt-6 inline-block w-full lg:mx-8 py-3 text-lg font-bold text-white rounded-[50px] shadow bg-[#231955] sm:w-auto focus:outline-none focus:ring-0 hover:invert-[.10]">
                            <button>
                                Invest Now
                            </button>
                        </Link>
                    </div>


                    <div
                        className="my-5 border-[4px] border-[#483F71] w-full flex flex-col p-6 mx-auto text-center text-[#231955] rounded-[20px] xl:p-8 h-full">
                        <h3 className="mb-4 text-2xl font-semibold">MAIN ACCOUNT</h3>

                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">35%</span>
                            <span className="font-bold">ROI</span>
                        </div>

                        <p className="text-xl font-bold">
                            AFTER 48 HOURS</p>

                        <ul  className="mb-8 space-y-4 text-left mt-16 font-bold text-lg">
                            <li className="text-center space-x-3">
                                Mini Invest: $1,000
                            </li>
                            <li className="h-px bg-[#231955] w-[50%] mx-auto"></li>
                            <li className="space-x-3 text-center">
                                Max Invest: $10,000
                            </li>

                        </ul>

                        <Link to="/signup" className="mt-6 inline-block w-full lg:mx-8 py-3 text-lg font-bold text-white rounded-[50px] shadow bg-[#231955] sm:w-auto focus:outline-none focus:ring-0 hover:invert-[.10]">
                            <button>
                                Invest Now
                            </button>
                        </Link>
                    </div>


                    <div
                        className="my-5 border-[4px] border-[#483F71] w-full flex flex-col p-6 mx-auto text-center text-[#231955] rounded-[20px] xl:p-8 h-full">
                        <h3 className="mb-4 text-2xl font-semibold">VIP ACCOUNT</h3>

                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">50%</span>
                            <span className="font-bold">ROI</span>
                        </div>

                        <p className="text-xl font-bold">
                            AFTER 24 HOURS</p>

                        <ul className="mb-8 space-y-4 text-left mt-16 font-bold text-lg">
                            <li className="text-center space-x-3">
                                Mini Invest: $10,000
                            </li>
                            <li className="h-px bg-[#231955] w-[50%] mx-auto"></li>
                            <li className="space-x-3 text-center">
                                Max Invest: $50,000
                            </li>

                        </ul>

                        <Link to="/signup" className="mt-6 inline-block lg:mx-8 py-3 text-lg font-bold text-white rounded-[50px] shadow bg-[#231955] sm:w-auto focus:outline-none focus:ring-0 hover:invert-[.10]">
                            <button>
                                Invest Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ChooseYourInvestment;