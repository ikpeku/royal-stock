import React from 'react';
import StartYourInvestment1 from "../../../assets/StartYourInvestment1.png";
import StartYourInvestment2 from "../../../assets/StartYourInvestment2.png";
import { Link } from "react-router-dom";

const StartYourInvestment = () => {
    return (
        <section className="bg-[#D9D9D9]">
            <div className="max-w-screen-3xl px-4 sm:px-6 lg:px-8 mx-auto py-16">
                <div className="grid grid-cols-1 gap-8 lg:gap-8 lg:grid-cols-2">

                    <div className="lg:order-first flex gap-12">
                        <div className='ml-auto'>
                            <img src={StartYourInvestment1} alt="Money Icon" className="" />
                            <p className="mt-4 text-[#231955] font-bold text-lg">Start your investment
                                today</p>

                        </div>
                        <div>
                            <img src={StartYourInvestment2} alt="Staff shaking hands" className="" />
                            <p className="mt-4 text-[#231955] font-bold text-lg">We are your partner</p>

                        </div>
                    </div>


                    <div className='md:w-2/3'>
                        <h2 className="text-center md:text-start text-3xl font-bold text-[#231955]">It is time to make your money work for you</h2>

                        <p className="mt-2 text-[#918CAA] italic">
                            Whether you are looking to grow, preserve or pass on your
                            wealth, we help our clients to achieve their financial
                            ambitions by building lasting relationships, adopting a
                            holistic approach to financial planning and providing
                            whole of market advice
                        </p>

                    </div>





                </div>


                <div className="mt-8 ">

                    <h2 className="text-[#231955] font-bold text-2xl text-center">HOW IT WORKS</h2>
                    <p className="text-center text-xl md:text-[48px] text-[#918CAA] font-thin mb-16">A Simple Process</p>

                    <h4 className="sr-only">Steps</h4>

                    <div
                        className="relative after:inset-x-0 after:h-0.5 after:absolute after:top-1/2 after:-translate-y-1/2 after:block after:rounded-lg after:bg-white"
                    >
                        <ol
                            className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-y-10 md:flex justify-between text-sm font-medium"
                        >
                            <li className="flex flex-col items-center md:items-start bg-[#D9D9D9]">
                                <svg className="md:ml-8 mb-6" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 16.2125C0 7.31563 11.1 0 25 0C38.9 0 50 7.31875 50 16.2125V33.7906C50 42.6812 38.9 50 25 50C11.1 50 0 42.6813 0 33.7875V16.2156V16.2125ZM22.5 3.22813C12.705 4.02812 5 9.48438 5 16.2125V17.1875H22.5V3.22813ZM27.5 3.22813V17.1875H45V16.2094C45 9.48438 37.295 4.02812 27.5 3.22813ZM45 20.3125H5V33.7906C5 41.0781 14.05 46.875 25 46.875C35.95 46.875 45 41.0781 45 33.7875V20.3125Z" fill="#1F4690" />
                                </svg>

                                <span className="text-[#231955] text-xl font-bold"> Create account </span>
                            </li>

                            <li className="flex flex-col items-center bg-[#D9D9D9]">
                                <svg className="mb-6" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 0L13.6364 8.69565H36.3636L25 0ZM7.95455 2.17391L0 12.2957V50H50V12.2957L42.0455 2.17391H30.6818L36.3636 6.52174H39.7727L43.1818 10.8696H6.81818L10.2273 6.52174H13.6364L19.3182 2.17391H7.95455ZM4.54545 15.2174H45.4545V45.6522H4.54545V15.2174ZM17.7568 19.5652C16.5045 19.6739 15.5795 20.7457 15.6955 21.9435C15.8114 23.1391 16.9295 24.0239 18.1818 23.913H31.8182C32.6364 23.9217 33.3977 23.513 33.8159 22.8348C34.0165 22.5015 34.1221 22.1237 34.1221 21.7391C34.1221 21.3546 34.0165 20.9767 33.8159 20.6435C33.3977 19.9652 32.6341 19.5565 31.8182 19.5652H17.7545H17.7568Z" fill="#1F4690" />
                                </svg>

                                <span className="text-[#231955] text-xl font-bold"> Pick investment plan </span>
                            </li>

                            <li className="flex flex-col items-center md:items-end bg-[#D9D9D9]">
                                <svg className="md:mr-12 mb-6" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 35H30V31.25H26.6667V13.75H23.6979L19.8438 19.1016L21.849 22.2266C22.5781 21.263 23.0556 20.5208 23.2812 20H23.3333V31.25H20V35ZM33.3333 25C33.3333 26.8229 33.151 28.6719 32.7865 30.5469C32.4219 32.4219 31.9054 34.1667 31.237 35.7812C30.5686 37.3958 29.6875 38.7109 28.5938 39.7266C27.5 40.7422 26.3021 41.25 25 41.25C23.6979 41.25 22.5 40.7422 21.4062 39.7266C20.3125 38.7109 19.4314 37.3958 18.763 35.7812C18.0946 34.1667 17.5781 32.4219 17.2135 30.5469C16.849 28.6719 16.6667 26.8229 16.6667 25C16.6667 23.1771 16.849 21.3281 17.2135 19.4531C17.5781 17.5781 18.0946 15.8333 18.763 14.2188C19.4314 12.6042 20.3125 11.2891 21.4062 10.2734C22.5 9.25781 23.6979 8.75 25 8.75C26.3021 8.75 27.5 9.25781 28.5938 10.2734C29.6875 11.2891 30.5686 12.6042 31.237 14.2188C31.9054 15.8333 32.4219 17.5781 32.7865 19.4531C33.151 21.3281 33.3333 23.1771 33.3333 25ZM46.6667 35V15C44.8264 15 43.2552 14.0234 41.9531 12.0703C40.651 10.1172 40 7.76042 40 5H10C10 7.76042 9.34896 10.1172 8.04688 12.0703C6.74479 14.0234 5.17361 15 3.33333 15V35C5.17361 35 6.74479 35.9766 8.04688 37.9297C9.34896 39.8828 10 42.2396 10 45H40C40 42.2396 40.651 39.8828 41.9531 37.9297C43.2552 35.9766 44.8264 35 46.6667 35ZM50 2.5V47.5C50 48.1771 49.8351 48.763 49.5052 49.2578C49.1753 49.7526 48.7847 50 48.3333 50H1.66667C1.21528 50 0.824653 49.7526 0.494792 49.2578C0.164931 48.763 0 48.1771 0 47.5V2.5C0 1.82292 0.164931 1.23698 0.494792 0.742188C0.824653 0.247396 1.21528 0 1.66667 0H48.3333C48.7847 0 49.1753 0.247396 49.5052 0.742188C49.8351 1.23698 50 1.82292 50 2.5Z" fill="#1F4690" />
                                </svg>

                                <span className="text-[#231955] text-xl font-bold"> Watch your wealth grow</span>
                            </li>
                        </ol>
                    </div>

                </div>
                <div className="flex justify-end">
                    <Link to="/signup" className="mt-10 inline-block w-full px-12 py-4 text-lg font-bold text-white text-center rounded-[50px] shadow bg-[#231955] sm:w-auto focus:outline-none focus:ring-0 hover:invert-[.10]">
                        <button>
                            Create account
                        </button>
                    </Link>
                </div>

            </div>


        </section>

    )
}

export default StartYourInvestment;