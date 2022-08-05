import React from 'react';
import WeSetThePaceImg from "../../../assets/office-gist.png";


const WeSetThePace = () => {
    return (
    <section>
        <div className="max-w-screen-3xl px-4 sm:px-6 lg:px-8 mx-auto py-4">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
                <div
                    className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
                >
                    <img src={WeSetThePaceImg} alt="Staff using a computer a meeting" className="absolute inset-0 object-cover w-full h-full" />

                </div>

                <div className="lg:py-24">
                    <h2 className="text-3xl font-bold text-[#231955]">We set the Pace, others follow.</h2>

                    <p className="mt-2 text-[#918CAA] italic">
                        As high-conviction investors, we refuse to follow the herd.
                        Instead, we focus on stocks that are out of favour with
                        mainstream investors,as we believe that these offers the
                        greatest potential for long-term gains. This is because
                        stocks that are popular tend to be overvalued  while
                        out-of-favour stocks are often too cheap.
                        We aim to exploit this inefficiency for our shareholders.
                    </p>
                </div>
            </div>
        </div>
    </section>

)
}

export default WeSetThePace;