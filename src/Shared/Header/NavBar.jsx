import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="container mx-auto flex justify-between items-center py-12">
        <div>
          <Link to={"/"} className="text-[28px] font-bold text-dark1">
            Book Review
          </Link>
        </div>
        <nav>
          <ul className="flex">
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
              <NavLink to={"/reviews"} className="text-lg text-dark2 px-5 py-3">
                Reviews
              </NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <button className="text-lg font-semibold text-white bg-green1 px-7 py-4 rounded-lg mr-4">
            Sign In
          </button>
          <button className="text-lg font-semibold text-white bg-blue1 px-7 py-4 rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
