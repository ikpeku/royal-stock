import React from 'react';
import Ellipse3Img from "../../../assets/Ellipse3.png";
import Ellipse4Img from "../../../assets/Ellipse4.png";
import Ellipse6Img from "../../../assets/Ellipse6.png";


const Reviews = () => {
    return (
        <section>
            <div className="max-w-screen-2xl px-4 sm:px-6 lg:px-8 mx-auto xl:py-8 ">
                <h3 className="text-center text-[#231955] font-bold text-4xl">Reviews from some of our top investors..</h3>

                <div className="mt-8 sm:mt-12 lg:mt-10">
                    <dl className="flex flex-wrap justify-between space-y-10 md:space-y-0 ">
                        <div className="max-w-xs">
                            <div className="flex items-baseline">
                                <img src={Ellipse3Img} alt="Staff having a meeting" className="w-20 h-20" />
                                <h4 className="text-black font-bold text-2xl ml-2"> JACKS</h4>
                            </div>

                            <p className="text-[#B6B2C6]">I have made so much
                                profit from ROYAL STOCK
                                investment options.
                            </p>
                        </div>

                        <div className="max-w-xs">
                            <div className="flex items-baseline">
                                <img src={Ellipse4Img} alt="Staff having a meeting" className="w-20 h-20" />
                                <h4 className="text-black font-bold text-2xl ml-2"> MARA</h4>
                            </div>

                            <p className="text-[#B6B2C6]">Stock investment has not
                                been smooth till i was
                                introduced to ROYAL STOCK
                                platform.
                            </p>
                        </div>

                        <div className="max-w-xs">
                            <div className="flex items-baseline">
                                <img src={Ellipse6Img} alt="Staff having a meeting" className="w-20 h-20" />
                                <h4 className="text-black font-bold text-2xl ml-2">  DAVIS</h4>
                            </div>

                            <p className="text-[#B6B2C6]">I will like to commend
                                transparency,ROYAL
                                STOCK are the best.
                            </p>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    )
}

export default Reviews;