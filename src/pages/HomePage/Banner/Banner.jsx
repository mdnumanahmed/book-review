import book from "./../../../assets/banner-book.png";
const Banner = () => {
  return (
    <div className="container mx-auto bg-dark1 rounded-lg">
      <div className="grid grid-cols-5 items-center px-32 py-20 gap-10 ">
        <div className="space-y-12 col-span-3">
          <h1>Books to freshen up your bookshelf</h1>
          <button className="btn btn-green text-xl">View The List</button>
        </div>
        <div className="col-span-2">
          <img src={book} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
