import PropTypes from "prop-types";
import { DataContext } from "../../Provider/DataProvider";
import { useContext } from "react";
import ListedBook from "./ListedBook";

const BookList = ({ books }) => {
  const { handleBookDetails } = useContext(DataContext);
  return (
    <div>
      {books.map((book) => (
        <ListedBook
          key={book.bookId}
          book={book}
          handleBookDetails={handleBookDetails}
        />
      ))}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookList;
