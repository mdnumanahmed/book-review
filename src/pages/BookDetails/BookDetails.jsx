import { useContext } from "react";
import { DataContext } from "../../Provider/DataProvider";
import Loader from "../../Shared/Loader/Loader";
import { getStoredData, saveToLocalStorage } from "../../utilities/saveToDb";
import { toast } from "react-toastify";

const BookDetails = () => {
  const { book, loading } = useContext(DataContext);

  if (loading) {
    return <Loader />;
  }

  const {
    bookId,
    author,
    bookName,
    category,
    image,
    review,
    totalPages,
    yearOfPublishing,
    publisher,
    tags,
    rating,
  } = book;

  const handleWishlist = (id, key) => {
    const readListIds = getStoredData("read-list");
    if (readListIds.includes(id)) {
      toast.error("Added in Read List, Try another!");
      return;
    }
    const wishlistIds = getStoredData(key);
    if (!wishlistIds.includes(id)) {
      saveToLocalStorage(id, key);
      toast.success("Added successfully in Wish List! ");
      return;
    }
    toast.warning("Already added, Try to Read book!");
    return false;
  };

  const handleReadList = (id, key) => {
    const storedIds = getStoredData(key);
    if (!storedIds.includes(id)) {
      saveToLocalStorage(id, key);
      toast.success("Added successfully in Read List! ");
      return;
    }
    toast.warning("Already added, Try another book!");
  };

  return (
    <div>
      <div className="container mx-auto pb-40 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="p-20 bg-dark1 rounded-2xl">
          <img src={image} alt="" className="rounded-2xl" />
        </div>
        <div className="space-y-5">
          <h2>{bookName}</h2>
          <h4 className="text-dark2">By : {author}</h4>
          <hr />
          <h4 className="text-dark2">{category}</h4>
          <hr />
          <p>
            <span className="font-bold text-dark1">Review :</span> {review}
          </p>
          <div className="flex gap-3 items-center">
            <p className="font-bold text-dark1">Tags</p>
            {tags.map((tag, idx) => (
              <button key={idx} className="btn-sm">
                {tag}
              </button>
            ))}
          </div>
          <div className="w-full h-0.5 bg-dark1"></div>
          <table>
            <tbody>
              <tr>
                <td>Number of Pages:</td>
                <td className="font-semibold text-dark1">{totalPages}</td>
              </tr>
              <tr>
                <td>Publisher:</td>
                <td className="font-semibold text-dark1">{publisher}</td>
              </tr>
              <tr>
                <td>Year of Publishing:</td>
                <td className="font-semibold text-dark1">{yearOfPublishing}</td>
              </tr>
              <tr>
                <td>Rating:</td>
                <td className="font-semibold text-dark1">{rating}</td>
              </tr>
            </tbody>
          </table>
          <div className="space-x-4">
            <button
              onClick={() => handleReadList(bookId, "read-list")}
              className="btn-outline border-2 border-black"
            >
              Read
            </button>
            <button
              onClick={() => handleWishlist(bookId, "wishlist")}
              className="btn btn-blue"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
