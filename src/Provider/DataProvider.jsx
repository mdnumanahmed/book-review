import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(true);
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/booksData.json");
      const data = await res.json();
      setBooks(data);
      setLoading(false);
    };
    loadData();
  }, []);

  const handleBookDetails = (book) => {
    setBook(book);
    setLoading(false);
  };

  useEffect(
    (key = active ? "read-list" : "wishlist") => {
      const readListIds = JSON.parse(localStorage.getItem(key));
      const readListBooks = books?.filter((b) =>
        readListIds?.includes(b.bookId)
      );
      setReadList(readListBooks);

      const wishListIds = JSON.parse(localStorage.getItem(key));
      const wishListBooks = books?.filter((b) =>
        wishListIds?.includes(b.bookId)
      );
      setWishList(wishListBooks);
    },
    [books, active, reload]
  );

  const values = {
    books,
    handleBookDetails,
    book,
    loading,
    readList,
    active,
    wishList,
    setActive,
    setWishList,
    setReadList,
    setReload,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default DataProvider;
