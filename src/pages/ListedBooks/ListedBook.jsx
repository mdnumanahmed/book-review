import PropTypes from "prop-types";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ListedBook = ({ book, handleBookDetails }) => {
  const {
    bookId,
    author,
    bookName,
    category,
    image,
    totalPages,
    yearOfPublishing,
    publisher,
    tags,
    rating,
  } = book;
  return (
    <div className="p-6 border-2 border-black/15 rounded-2xl flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:max-w-60 text-center rounded-2xl bg-dark1 px-12 py-7">
        <img src={image} alt="" className="max-h-44 inline-block" />
      </div>
      <div className="flex-1 space-y-4">
        <h3 className="font-bold text-dark1">{bookName}</h3>
        <p className="font-medium text-dark2">By : {author}</p>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 lg:items-center">
          <div className="flex items-center gap-2">
            <p>Tags</p>
            {tags?.map((tag, idx) => (
              <button key={idx} className="btn-sm bg-green-50">
                {tag}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt /> Year of Publishing: {yearOfPublishing}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 lg:items-center">
          <p className="flex items-center gap-2">
            <FaUsers /> Publisher: {publisher}
          </p>
          <p className="flex items-center gap-2">
            <IoNewspaperOutline /> Page : {totalPages}
          </p>
        </div>
        <hr />
        <div className="space-x-4 text-center lg:text-left ">
          <button className="text-[#328EFF] bg-[#328eff1A] px-5 py-2 rounded-full">
            Category: {category}
          </button>
          <button className="text-[#FFAC33] bg-[#FFAC331A] px-5 py-2 rounded-full">
            Rating: {rating}
          </button>
          <Link to={`/book/${bookId}`}>
            <button
              onClick={() => handleBookDetails(book)}
              className="text-white bg-green1 px-5 py-2 rounded-full mt-4 lg:mt-0 "
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ListedBook.propTypes = {
  book: PropTypes.object.isRequired,
  handleBookDetails: PropTypes.func.isRequired,
};

export default ListedBook;
