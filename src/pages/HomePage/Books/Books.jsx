import { useContext } from "react";
import Book from "./Book";
import { DataContext } from "../../../Provider/DataProvider";

const Books = () => {
  const { books } = useContext(DataContext);
  console.log(books);
  return (
    <div>
      <div className="container mx-auto py-24">
        <div className="text-center mb-9">
          <h2>Books</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <Book key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
