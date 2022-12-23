import { AllPhotos } from "../../contants";
import { NavLink, Link, Outlet } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { UserContexts } from "../../hooks/useContexts";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const {user} = UserContexts()

 
  return (
    <>
      <nav
        className={
          !showNav
            ? "px-4 md:static bg-[#D3D1DD] py-8 "
            : " absolute w-screen h-full z-[100] px-4 md:static bg-[#D3D1DD] py-8 "
        }
      >
        <div className="md:container md:flex mx-auto">
          <div className="md:flex-1">
            <div className="flex">
              <Link className="" to="/">
                <img
                  className="w-32 md:w-48"
                  src={AllPhotos.Logo}
                  alt="royal-stock-logo"
                />
              </Link>

              {showNav && (
                <FiX
                  size={40}
                  onClick={() => setShowNav(false)}
                  className="ml-auto md:hidden"
                />
              )}

              {!showNav && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 ml-auto md:hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  onClick={() => setShowNav(true)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </div>
          </div>
          <div
           onClick={() => setShowNav((prev) => !prev)}
            className={
              !showNav ? "hidden md:block mt-5 md:mt-0" : "block mt-5 md:mt-0"
            }
          >
            <div>
              <div
                className="hidden md:flex justify-end my-2"
                id="translator"
              ></div>
              <ul className="md:flex align-right space-y-10 md:space-y-0">
                <li className="nav-item text-white mr-12">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-3xl font-bold border-b-8  hover:text-[#120D2B]  border-b-[#0C081C]"
                        : "text-3xl font-bold hover:text-[#120D2B] hover:border-b-4  border-b-[#0C081C]"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item text-white mr-12">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-3xl font-bold border-b-8 x  hover:text-[#120D2B] hover:border-b-4  border-b-[#0C081C]"
                        : "text-3xl font-bold hover:text-[#120D2B] hover:border-b-4  border-b-[#0C081C]"
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item text-white mr-12">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-3xl font-bold border-b-8 x  hover:text-[#120D2B] hover:border-b-4  border-b-[#0C081C]"
                        : "text-3xl font-bold hover:text-[#120D2B] hover:border-b-4  border-b-[#0C081C]"
                    }
                    to="/faq"
                  >
                    FAQ
                  </NavLink>
                </li>
                <li className="nav-item text-white mr-12">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-3xl font-bold border-b-8 x  hover:text-[#120D2B] hover:border-b-4  border-b-[#0C081C]"
                        : "text-3xl font-bold hover:text-[#120D2B] hover:border-b-4  border-b-[#0C081C]"
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>


                {user && <li className="nav-item text-white">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-3xl font-bold border-b-8 x  hover:text-[#120D2B] hover:border-b-4  border-b-[#0C081C]"
                        : "text-3xl font-bold hover:text-[#120D2B] hover:border-b-4  border-b-[#0C081C]"
                    }
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>}


                {!user && <li className="nav-item text-white">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-3xl font-bold border-b-8 x  hover:text-[#120D2B] hover:border-b-4  border-b-[#0C081C]"
                        : "text-3xl font-bold hover:text-[#120D2B] hover:border-b-4  border-b-[#0C081C]"
                    }
                    to="/signin"
                  >
                    Signin/Signup
                  </NavLink>
                </li>}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
