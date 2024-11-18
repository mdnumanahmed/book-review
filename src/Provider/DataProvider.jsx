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
  const [sortedReadBook, setSortedReadBook] = useState([]);
  const [sortedWishBook, setSortedWishBook] = useState([]);
  const [reload, setReload] = useState(0);
  const [selected, setSelected] = useState("");

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

  useEffect(() => {
    console.log(selected, active);
    if (active) {
      if (selected === "rating") {
        const ratingSort = readList.sort((a, b) => {
          return b.rating - a.rating;
        });
        setSortedReadBook(ratingSort);
      } else if (selected === "totalPage") {
        const pageSort = readList.sort((a, b) => {
          return b.totalPages - a.totalPages;
        });
        setSortedReadBook(pageSort);
      } else if (selected === "publishedYear") {
        const yearSort = readList.sort((a, b) => {
          return b.yearOfPublishing - a.yearOfPublishing;
        });
        setSortedReadBook(yearSort);
      }
    } else {
      if (selected === "rating") {
        const ratingSort = wishList.sort((a, b) => {
          return b.rating - a.rating;
        });
        setSortedWishBook(ratingSort);
      } else if (selected === "totalPages") {
        const pageSort = wishList.sort((a, b) => {
          return b.totalPages - a.totalPages;
        });
        setSortedWishBook(pageSort);
      } else if (selected === "publishedYear") {
        const yearSort = wishList.sort((a, b) => {
          return b.yearOfPublishing - a.yearOfPublishing;
        });
        setSortedWishBook(yearSort);
      }
    }
  }, [active, readList, wishList, selected]);

  // const handleSortBook = (e) => {
  //   e.preventDefault();
  //   setSelected(e.target.value);
  //   // setReload((prev) => prev + 1);
  //   console.log(selected, readList, sortedReadBook);
  //   if (active) {
  //     if (selected === "rating") {
  //       const ratingSort = readList.sort((a, b) => {
  //         return b.rating - a.rating;
  //       });
  //       setSortedReadBook(ratingSort);
  //     } else if (selected === "totalPage") {
  //       const pageSort = readList.sort((a, b) => {
  //         return b.totalPages - a.totalPages;
  //       });
  //       setSortedReadBook(pageSort);
  //     } else if (selected === "publishedYear") {
  //       const yearSort = readList.sort((a, b) => {
  //         return b.yearOfPublishing - a.yearOfPublishing;
  //       });
  //       setSortedReadBook(yearSort);
  //     } else {
  //       setSortedReadBook(readList);
  //     }
  //   } else {
  //     if (selected === "rating") {
  //       const ratingSort = wishList.sort((a, b) => {
  //         return b.rating - a.rating;
  //       });
  //       setSortedWishBook(ratingSort);
  //     } else if (selected === "totalPages") {
  //       const pageSort = wishList.sort((a, b) => {
  //         return b.totalPages - a.totalPages;
  //       });
  //       setSortedWishBook(pageSort);
  //     } else if (selected === "publishedYear") {
  //       const yearSort = wishList.sort((a, b) => {
  //         return b.yearOfPublishing - a.yearOfPublishing;
  //       });
  //       setSortedWishBook(yearSort);
  //     } else {
  //       setSortedWishBook(wishList);
  //     }
  //   }
  // };

  useEffect(
    (key = active ? "read-list" : "wishlist") => {
      if (active) {
        const readListIds = JSON.parse(localStorage.getItem(key));
        const readListBooks = books?.filter((b) =>
          readListIds?.includes(b.bookId)
        );
        setReadList(readListBooks);
      } else {
        const wishListIds = JSON.parse(localStorage.getItem(key));
        const wishListBooks = books?.filter((b) =>
          wishListIds?.includes(b.bookId)
        );
        setWishList(wishListBooks);
      }
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
    // handleSortBook,
    sortedReadBook,
    sortedWishBook,
    selected,
    setSelected,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default DataProvider;
