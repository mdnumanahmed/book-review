import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Book = ({ book, handleBookDetails }) => {
  const { bookId, author, bookName, category, image, tags, rating } = book;
  return (
    <Link to={`/book/${bookId}`} onClick={() => handleBookDetails(book.bookId)}>
      <div className="p-6 rounded-2xl border-2">
        <div className="text-center py-8 rounded-xl bg-dark1 mb-6">
          <img src={image} alt="" className="h-36 object-cover inline-block" />
        </div>
        <div className="space-y-4">
          <div>
            {tags.map((tag, idx) => (
              <button
                onClick={(e) => console.log(e.target)}
                key={idx}
                className="btn-sm bg-green2"
              >
                {tag}
              </button>
            ))}
          </div>
          <h3>{bookName}</h3>
          <p className="font-medium">By: {author} </p>
          <hr className="" />
          <div className="flex items-center justify-between">
            <p>{category}</p>
            <p className="flex items-center gap-2">
              {rating} <FaStar className="" />{" "}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleBookDetails: PropTypes.func.isRequired,
};

export default Book;
