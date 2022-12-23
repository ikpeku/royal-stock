import { useState } from "react";
import { signInWithGoogle } from "../../utils/firebase";
import { Link , useNavigate} from "react-router-dom";
import { signUpWithEmailPassword } from "../../utils/firebase";

const datas = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  avatar: "",
  username: ""

}

const Signup = () => {
  const navigate = useNavigate()
  const [ data, setData] = useState(datas);
  const {email, lastName, firstName, password, confirmPassword, avatar, username} = data
 

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);


  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    navigate("/");
  };


  const handleChange = (e) => {
    const {id, value, files} = e.target

   
// console.log(files);
    setData({...data, [id]: value , avatar: files} )

  }
// console.log(avatar[0].type);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(avatar[0].type.includes("image") && avatar[0].size < 60000) return
    if(password !== confirmPassword) return
    await signUpWithEmailPassword({email, password, displayName: `${firstName} ${lastName}`, file: avatar[0], username })
    navigate("/")
  };

  return (
    <>
      <div>
        <div className="bg-[#ffffff] flex flex-wrap w-full md:p-8">
          <div className=" bg-[#231955] w-full md:w-1/2 h-28  md:h-96 md:pl-20">
            <div className="font-roboto">
              <div className="w-full md:w-2/3 ">
                <div className="relative flex flex-wrap  py-3">
                  <p className="text-[#ffffff] text-lg md:text-lg lg:text-3xl">
                    CREATE ACCOUNT AND START YOUR JOURNEY TO FINANCIAL FREEDOM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- <div className="md:h-72"></div> --> */}

          {/* <!-- form container --> */}
          <div className="w-full md:w-1/2 md:-ml-52 md:mt-40 ">
            <div className="bg-[#918CAA] md:p-12">
              <form className="mt-8" onSubmit={handleSubmit}>
                <div className="mx-auto max-w-lg">
                  {/* <!-- first % last name --> */}
                  <p className="font-bold text-[#120D2B]">Sign Up</p>
                  <em className="text-[#ffffff]">It is quick and easy</em>
                  <div className="flex  gap-x-5 w-full">
                    <div className="py-2 w-full">
                      <input
                      onChange={handleChange}
                      id="firstName"
                        required
                        placeholder="First Name"
                        type="text"
                        className="text-md block px-3 py-2 w-full 
                                    bg-white border-2 border-gray-300 placeholder-gray-600 
                                    shadow-md focus:placeholder-gray-500 focus:bg-white 
                                    focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                    <div className="py-2 w-full">
                      <input
                      onChange={handleChange}
                      id="lastName"
                        required
                        placeholder="Last Name"
                    
                        type="type"
                        className="text-md block px-3 py-2 w-full 
      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* <!-- email --> */}
                  <div className="py-2">
                    <input
                    onChange={handleChange}
                    id="email"
                      required
                      placeholder="Email"
                      type="email"
                      className="text-md block px-3 py-2  w-full 
  bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    />
                  </div>

                  {/* <!-- username --> */}
                  <div className="py-2">
                    <input
                      onChange={handleChange}
                      id="username"
                      required
                      placeholder="Username"
                      type="text"
                      className="text-md block px-3 py-2   w-full 
  bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    />
                  </div>

                  {/* <!-- password --> */}
                  <div className="py-2">
                    <div className="relative">
                      <input
                      onChange={handleChange}
                      id="password"
                        required
                        placeholder="Password"
                        type={show ? "password" : "text"}
                        className="text-md block px-3 py-2 w-full 
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

                  {/* <!-- re-enter password--> */}
                  <div className="py-2">
                    <span className="px-1 text-sm text-gray-600"></span>
                    <div className="relative">
                      <input
                      onChange={handleChange}
                      id="confirmPassword"
                        required
                        placeholder="Confirm Password"
                        type={show2 ? "password" : "text"}
                        className="text-md block px-3 py-2  w-full 
  bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
  focus:placeholder-gray-500
  focus:bg-white 
  focus:border-gray-600  
  focus:outline-none"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        {show2 && (
                          <span
                            className="material-symbols-outlined cursor-pointer"
                            onClick={() => setShow2(false)}
                          >
                            visibility
                          </span>
                        )}
                        {!show2 && (
                          <span
                            className="material-symbols-outlined cursor-pointer"
                            onClick={() => setShow2(true)}
                          >
                            visibility_off
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* <!-- password ends --> */}

                  <div>
                    <input type="file" name="" id="avatar" onChange={handleChange} />
                  </div>

                  <div className="flex justify-between">
                    <label className="block text-gray-500 font-bold my-4">
                      <input
                        required
                        type="checkbox"
                        className="leading-loose text-[#231955] active:border-[#ffffff] active:outline-[#ffffff]"
                      />
                      <span className="py-2 text-sm text-[#ffffff] leading-snug">
                        By clicking on sign up, <br /> You agree to our
                        <a href="./agreement.html" className="text-[#231955]">
                          Privacy policies
                        </a>
                      </span>
                    </label>{" "}
                    <label className="block text-gray-500 font-bold my-4">
                      <Link
                        to="#"
                        className="cursor-pointer tracking-tighter text-[#231955] border-b-2 border-gray-200 hover:border-gray-400"
                      >
                        <span>Forgot Password?</span>
                      </Link>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-2  text-center">
                    <div className="relative flex flex-col items-start mr-1 text-sm">
                      <span className="mr-1 text-gray-500">
                        Already have an account?
                      </span>
                      <Link
                        to="/signin"
                        className="block font-medium text-[#231955]"
                      >
                        Login Here
                      </Link> <br />
                      <span className="mr-1 text-white font-bold">
                       Have a google account?
                      </span>
                      <button type="button"
                      onClick={handleGoogleSignIn}
                        className="block font-medium text-[#231955]"
                      >
                        Sign up with Google
                      </button>
                    </div>
                   
                      <button
                        type="submit"
                        className="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-[#ffffff] bg-[#231955] md:hover:invert-[%20]"
                      >
                        Sign Up
                      </button>
                   
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
