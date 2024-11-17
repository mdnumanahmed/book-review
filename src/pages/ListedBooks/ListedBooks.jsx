import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const ListedBooks = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="bg-dark1 rounded-2xl text-center py-8">
          <h2>Books</h2>
        </div>
        <div className="text-center py-8">
          <select
            onClick={(e) => console.log(e.target)}
            className="focus:outline-none bg-green1 text-lg font-semibold text-white text-center px-10 py-4 rounded-lg "
          >
            <optgroup className="bg-gray-200 text-lg text-left ml-0 pl-0 text-dark2  rounded-lg">
              <option value="">Sort By</option>
              <option value="rating">Rating</option>
              <option value="totalPage">Number of pages</option>
              <option value="publishYear">Publisher year</option>
            </optgroup>
          </select>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <div className="tab border-b-2 border-gray-600 py-2">
          <NavLink
            to={"/books/read-books"}
            className="text-lg text-dark2 px-4 py-3 border-2 border-b-white bg-white border-gray-600 rounded-t-lg"
          >
            Read Books
          </NavLink>
          <NavLink
            to={"/books/wishlist-books"}
            className="text-lg text-dark2 px-4 py-3 "
          >
            Wishlist Books
          </NavLink>
        </div>
        <div>
          <div className="p-6 rounded-2xl flex gap-6">
            <div className="max-w-60 rounded-2xl px-12 py-7">
              <img src="" alt="" />
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="font-bold text-dark1">The Catcher in the Rye</h3>
              <p className="font-medium text-dark2">By : Awlad Hossain</p>
              <div className="flex gap-3 items-center">
                <div className="flex items-center gap-2">
                  <p>Tags</p>
                  <button className="btn-sm bg-green-50">Fiction</button>
                  <button className="btn-sm bg-green-50">Fiction</button>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt /> Year of Publishing: 1924
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="flex items-center gap-2">
                  <FaUsers /> Publisher: Scribner
                </p>
                <p className="flex items-center gap-2">
                  <IoNewspaperOutline /> Page 192
                </p>
              </div>
              <hr />
              <div className="space-x-4">
                <button className="text-[#328EFF] bg-[#328eff1A] px-5 py-2 rounded-full">
                  Category: Classic
                </button>
                <button className="text-[#FFAC33] bg-[#FFAC331A] px-5 py-2 rounded-full">
                  Rating: 4.5
                </button>
                <button className="text-white bg-green1 px-5 py-2 rounded-full">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
