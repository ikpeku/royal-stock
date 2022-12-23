import React, { useState } from "react";
import { AllPhotos } from "../../contants";
import { Link } from "react-router-dom";

import { signInWithGoogle } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    navigate("/");
  };



  return (
    <>
      <section className="relative bg-white">
        <div className="relative">
          <img
            className=" inset-0 object-[75%] sm:object-[25%] object-cover w-screen h-full max-h-28  md:max-h-64 "
            src={AllPhotos.Dash}
            alt="login banner"
          />
        </div>

        <div className="absolute top-0 inset-0 max-w-screen-xl pt-8 md:px-4 md:py-24 lg:py-36 mx-auto lg:items-center lg:flex flex-col">
          <div className="w-full text-center sm:text-left pb-8">
            <h1 className="text-3xl text-[#FFF80A] font-extrabold sm:text-5xl text-center">
              LOGIN PAGE
            </h1>
          </div>

          <div className="hidden  w-1/3 md:flex mx-auto mt-20">
            <div className="w-full bg-[#231955] py-3 rounded-[10px] ">
              <button className="  flex m-auto ">
                <img src={AllPhotos.Key} alt="key" className="m-auto h-8 w-12" />
              </button>
            </div>
            <div className="w-full bg-[#483F71] mt-2 py-3 -ml-[95%] rounded-[10px] ">
              <button className=" flex  m-auto ">
                <img src={AllPhotos.Key} alt="key" className="m-auto h-8 w-12" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Banner ends Here --> */}

      {/* <!-- Login start --> */}
      <div className="bg-[#B6B2C6] w-full md:mt-20">
        <div className="container w-full mx-auto bg-[#B6B2C6] md:p-20">
          <div className="font-roboto">
            <div className="w-full md:w-2/3 mx-auto">
              <div className="relative flex flex-wrap">
                <div className="w-full relative">
                  <div className="bg-[#D9D9D9] md:p-12">
                    <form className="mt-8">
                      <div className="mx-auto max-w-lg">
                        <div className="py-2">
                          <span className="px-1 text-sm text-gray-600">
                            Enter mail
                          </span>
                          <input
                            placeholder=""
                            type="text"
                            required
                            className="text-md block px-3 py-2  rounded-lg w-full 
                          bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                          />
                        </div>
                        <div className="py-2">
                          <span className="px-1 text-sm text-gray-600">
                            Password
                          </span>
                          <div className="relative">
                            <input
                              required
                              placeholder=""
                              type={show ? "password" : "text"}
                              className="text-md block px-3 py-2 rounded-lg w-full 
                          bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                          focus:placeholder-gray-500
                          focus:bg-white 
                          focus:border-gray-600  
                          focus:outline-none"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                              {show && (
                                <span
                                  className="material-symbols-outlined cursor-pointer"
                                  onClick={() => setShow(false)}
                                >
                                  visibility
                                </span>
                              )}
                              {!show && (
                                <span
                                  className="material-symbols-outlined cursor-pointer"
                                  onClick={() => setShow(true)}
                                >
                                  visibility_off
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <label className="block text-gray-500 font-bold my-4">
                            <input
                              type="checkbox"
                              className="leading-loose text-pink-600"
                            />{" "}
                            <span className="py-2 text-sm text-gray-600 leading-snug">
                              {" "}
                              Remember Me{" "}
                            </span>
                          </label>{" "}
                          <label className="block text-gray-500 font-bold my-4">
                            <button className="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400">
                              <span>Forgot Password?</span>
                            </button>
                          </label>
                        </div>

                        <button
                          className="mt-3 text-lg font-semibold bg-[#231955] w-full text-white rounded-lg
                                                        px-6 py-3 block shadow-xl hover:text-white hover:invert-[20%]"
                        >
                          Login
                        </button>
                      </div>
                    </form>

                    <div className="text-center border-t-4 border-[#ffffff] my-5 py-5 ">
                      <h1 className="text-sm font-bold text-[#231955] sm:text-3xl">
                        Or
                      </h1>
                      
                        <button onClick={handleGoogleSignIn}
                          className="mt-3  m-auto text-lg font-semibold bg-[#231955]  text-white rounded-lg
                                                     p-3 block shadow-xl hover:text-white hover:invert-[20%]"
                        >
                          Login with Google
                        </button>
                    
                    </div>

                    <div className="text-center border-t-4 border-[#ffffff] my-5 py-5 ">
                      <h1 className="text-sm font-bold text-[#231955] sm:text-3xl">
                        Don`t have account?
                      </h1>
                      <Link to="/signup">
                        <button
                          className="mt-3  m-auto text-lg font-semibold bg-[#231955]  text-white rounded-lg
                                                     p-3 block shadow-xl hover:text-white hover:invert-[20%]"
                        >
                          Create account
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
