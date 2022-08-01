import React from 'react'
// import "./Footer.scss"
import { AllPhotos } from '../../contants';
import { Link } from 'react-router-dom';
import { BsPhone, BsGeoAlt } from "react-icons/bs";

const Footer = () => {
  return (
        <footer className="bg-[#0C081C]">

          <div className='pt-8 max-w-screen-2xl px-4 sm:px-6 lg:px-8 mx-auto'>
          <div className="border-t-[3px] border-white"></div>


<div className="flex flex-wrap">

  <div className="w-full lg:w-1/3 pb-12 pt-10">
    <div id='translator2' className="mb-10">
      <a href="#translator">
        <select name="" id="" defaultValue="language">
          <option value="language">Select Language</option>
          <option value="">English</option>
          <option value="">French</option>
          <option value="">Dutch</option>
        </select>
      </a>
    </div>

    <Link to='/' className="">
      <img src={AllPhotos.Logo} className="w-[50%]" alt="royal stock logo" />
    </Link>
    <p className="text-white mt-10 text-lg">Copyright © 2015 <span className="text-[#FFF80A]">Royal Stock Shell.</span><br />All Rights Reserved</p>
  </div>

  <div className="w-full lg:w-2/3 pt-10 border-l-0 lg:border-l-[3px] border-white md:pl-8 my-10">
    <div className="flex">
      <div className="flex justify-between w-full flex-wrap space-y-10">
        <ul className="text-white text-lg">
          <li className="text-[#FFF80A] text-xl font-bold">
            Financial News
          </li>
          <li>
            <Link to='/' className="">
              Financial Times
            </Link>
          </li>
          <li>
            <Link to='/' className="">
              The Wall Street Journal
            </Link>
          </li>
          <li>
            <Link to='/' className="">
              Bloomberg
            </Link>
          </li>
          <li>
            <Link to='/' className="">
              Zero Hedge
            </Link>
          </li>
        </ul>

        <ul className="text-white text-lg">
          <li className="text-[#FFF80A] text-xl font-bold">
            Legal
          </li>
          <li>
            <Link to='/' className="">
              Agreement
            </Link>
          </li>
          <li>
            <Link to='/' className="">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </div>


    <div className="flex justify-center w-full">
      <div>
        <div className='single-sub-child mt-10 flex'>
          <BsGeoAlt color='#1F4690' size={40} />

          <div className="ml-2 md:ml-8">
            <p className="text-white">
              <span className="text-[#FFF80A] text-xl">Our Office :</span>
              <br />
              34-36 High Street, llford, England, IG6 2DQ, GB
            </p>
          </div>

        </div>
        <div className='single-sub-child text-white mt-8 flex'>
          <BsPhone color='#1F4690' size={40} />

          <div className="ml-2 md:ml-8">
            <p>
              <span>+447451287990</span> <br />
              support@royalstockshell.com
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>
</div>
          </div>

        </footer>
  )
}

export default Footer;