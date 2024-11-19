import PropTypes from "prop-types";
import ListedBook from "./ListedBook";
import { useContext } from "react";
import { DataContext } from "../../Provider/DataProvider";

const SortedBookList = ({ books }) => {
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

SortedBookList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default SortedBookList;
