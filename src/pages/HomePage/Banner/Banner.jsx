import { useNavigate } from "react-router-dom";
import book from "./../../../assets/banner-book.png";
const Banner = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/listed-books/read-book");
  };
  return (
    <div className="container mx-auto bg-dark1 rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center px-6 lg:px-32 py-4 lg:py-20 gap-10 ">
        <div className="space-y-12 col-span-3 text-center lg:text-left">
          <h1 className="text-4xl lg:text-[56px]">
            Books to freshen up your bookshelf
          </h1>
          <button onClick={handleNavigate} className="btn btn-green text-xl">
            View The List
          </button>
        </div>
        <div className="col-span-2">
          <img src={book} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
