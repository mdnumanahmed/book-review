import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/booksData.json");
      const data = await res.json();
      setBooks(data);
    };
    loadData();
  }, []);

  const handleBookDetails = async (id) => {
    const res = await fetch("/booksData.json");
    const books = await res.json();
    const foundedBook = books.find((book) => book.bookId === id);
    console.log(foundedBook);
    setBook(foundedBook);
  };

  const values = { books, handleBookDetails, book };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default DataProvider;
