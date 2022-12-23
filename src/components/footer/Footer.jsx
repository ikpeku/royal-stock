import React from "react";
import { AllPhotos } from "../../contants";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#0C081C]">
      <div className="pt-8 max-w-screen-2xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="border-t-[3px] border-white"></div>

        <div className="flex flex-wrap">
          <div className="order-last md:order-first w-full lg:w-1/3 pb-12 pt-10">
            <div id="translator2" className="md:mb-10"></div>

            <Link to="/">
            <picture>
            <img
                src={AllPhotos.Logo}
                className="w-[50%]"
                alt="royal stock logo"
              />
            </picture>
            </Link>
            <p className="text-white md:mt-10 md:text-lg">
              Copyright © 2015{" "}
              <span className="text-[#FFF80A]">Royal Stock Shell.</span>
              <br />
              All Rights Reserved
            </p>
          </div>

          <div className="w-full lg:w-2/3 md:pt-10 border-l-0 lg:border-l-[3px] border-white md:pl-8 my-10">
            <div className="flex">
              <div className="flex justify-between items-start w-full flex-wrap">
                <ul className="text-white text-lg">
                  <li className="text-[#FFF80A] text-xl font-bold">
                    Financial News
                  </li>
                  <li>
                    <a href="https://www.ft.com/cryptofinance" className="">
                      Financial Times
                    </a>
                  </li>
                  <li>
                    <a href="https://www.wsj.com/" className="">
                      The Wall Street Journal
                    </a>
                  </li>
                  <li>
                    <a href="https://www.bloomberg.com/crypto" className="">
                      Bloomberg
                    </a>
                  </li>
                  <li>
                    <a href="https://www.zerohedge.com/" className="">
                      Zero Hedge
                    </a>
                  </li>
                </ul>

                <ul className="text-white text-lg">
                  <li className="text-[#FFF80A] text-xl font-bold mt-5 sm:mt-0">Legal</li>
                  <li>
                    <Link to="/agreement">Agreement</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center w-full">
              <div>
                <div className="single-sub-child mt-10 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="#1F4690"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>

                  <div className="ml-2 md:ml-8">
                    <p className="text-white">
                      <span className="text-[#FFF80A] text-xl">Our Office :</span>
                      <br />
                      34-36 High Street, llford, England, IG6 2DQ, GB
                    </p>
                  </div>
                </div>
                <div className="single-sub-child text-white mt-8 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="#1F4690"
                    className="bi bi-phone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>

                  <div className="ml-2 md:ml-8">
                    <p>
                      <span>+441157910105</span> <br />
                      info@royalstockshell.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
