import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";

const Book = ({ book }) => {
  const { author, bookName, category, image, tags, rating } = book;
  return (
    <div className="p-6 rounded-2xl border-2">
      <div className="text-center py-8 rounded-xl bg-dark1 mb-6">
        <img src={image} alt="" className="h-36 object-cover inline-block" />
      </div>
      <div className="space-y-4">
        <div>
          <button className="btn-sm bg-green2 mr-3">{tags[0]}</button>
          <button className="btn-sm bg-green2">{tags[1]}</button>
        </div>
        <h3>{bookName}</h3>
        <p className="font-medium">By: {author} </p>
        <hr className="" />
        <div className="flex items-center justify-between">
          <p>{category}</p>
          <p>
            {rating} <FaStar className="inline-block" />{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
