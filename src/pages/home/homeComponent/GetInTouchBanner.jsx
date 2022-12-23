import React from "react";
import { Link } from "react-router-dom";

const GetInTouchBanner = () => {
  return (
    <section className="mt-10 mb-2 md:mt-0 bg-gray-300/80">
      <div className="md:max-w-screen-2xl px-4 sm:px-6 lg:px-8 mx-auto xl:py-8 relative">
        <div className="text-center bg-[#231955] max-w-full md:max-w-4xl mx-auto">

          <p className="text-xl text-[#ffffff]  md:text-4xl font-bold pt-12 pb-5">
          Would you like to speak with our consultants
          </p>

          <Link to="/contact"
            className="md:mt-[2rem] mb-5 inline-block px-4 md:px-12 py-3 text-lg font-bold bg-white rounded-[50px] text-[#231955] sm:w-auto focus:outline-none focus:ring-0 hover:invert-[.10]"
          >
            <button>Get in touch</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchBanner;
