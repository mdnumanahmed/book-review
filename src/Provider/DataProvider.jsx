import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/booksData.json");
      const data = await res.json();
      setBooks(data);
    };
    loadData();
  }, []);

  const values = { books };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default DataProvider;
