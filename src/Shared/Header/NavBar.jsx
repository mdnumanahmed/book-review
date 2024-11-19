import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="container mx-auto flex justify-between items-center py-6 lg:py-12 relative">
        <div>
          <Link to={"/"} className="text-[28px] font-bold text-dark1">
            Book Review
          </Link>
        </div>
        <nav>
          <div
            className={`${
              open && "top-16 w-60 text-right z-10"
            } absolute -top-80 right-0 lg:static  bg-gray-300 lg:bg-transparent p-5 lg:p-0 duration-500`}
          >
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
              <li>
                <NavLink to={"/"} className="text-lg text-dark2 px-5 py-3">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/listed-books"}
                  className="text-lg text-dark2 px-5 py-3"
                >
                  Listed Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/pages-to-read"}
                  className="text-lg text-dark2 px-5 py-3"
                >
                  Pages To Read
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/latest-books"}
                  className="text-lg text-dark2 px-5 py-3"
                >
                  Latest Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/reviews"}
                  className="text-lg text-dark2 px-5 py-3"
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <button className="hidden lg:inline-block text-lg font-semibold text-white bg-green1 px-7 py-4 rounded-lg mr-4">
            Sign In
          </button>
          <button className="hidden lg:inline-block text-lg font-semibold text-white bg-blue1 px-7 py-4 rounded-lg">
            Sign Up
          </button>
          <div onClick={() => setOpen(!open)} className="text-3xl lg:hidden">
            {open ? <IoMdClose /> : <CiMenuFries />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
