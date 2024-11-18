import { NavLink } from "react-router-dom";
import ListedBook from "./ListedBook";
import { useContext } from "react";
import { DataContext } from "../../Provider/DataProvider";
import Loader from "../../Shared/Loader/Loader";

const ListedBooks = () => {
  const {
    readList,
    active,
    setActive,
    wishList,
    loading,
    handleBookDetails,
    handleSortBook,
  } = useContext(DataContext);
  // // const [displayed, setDisplayed] = useState(readList);
  // const [sortedBook, setSortedBook] = useState(readList);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="container mx-auto">
        <div className="bg-dark1 rounded-2xl text-center py-8">
          <h2>Books</h2>
        </div>
        <div className="text-center py-8">
          <select
            onClick={(e) => handleSortBook(e.target.value)}
            className="focus:outline-none bg-green1 text-lg font-semibold text-white text-center px-10 py-4 rounded-lg "
          >
            <optgroup className="bg-gray-200 text-lg text-left ml-0 pl-0 text-dark2  rounded-lg">
              <option value="">Sort By</option>
              <option value="rating">Rating</option>
              <option value="totalPage">Number of pages</option>
              <option value="publishedYear">Published year</option>
            </optgroup>
          </select>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <div className="tab border-b-2 border-gray-600 py-2">
          <NavLink
            to={"/listed-books/read-book"}
            onClick={() => setActive(true)}
            className="text-lg text-dark2 px-4 py-3"
          >
            Read Books
          </NavLink>
          <NavLink
            to={"/listed-books/wishlist-book"}
            onClick={() => setActive(false)}
            className="text-lg text-dark2 px-4 py-3 "
          >
            Wishlist Books
          </NavLink>
        </div>
        <div className="py-8 space-y-6">
          {readList.map((book) => (
            <ListedBook
              key={book.bookId}
              book={book}
              handleBookDetails={handleBookDetails}
            />
          ))}
          {!active &&
            wishList.map((book) => (
              <ListedBook
                key={book.bookId}
                book={book}
                handleBookDetails={handleBookDetails}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
