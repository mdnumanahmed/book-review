import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout.jsx";
import Home from "./pages/HomePage/Home/Home.jsx";
import DataProvider from "./Provider/DataProvider.jsx";
import BookDetails from "./pages/BookDetails/BookDetails.jsx";
import ListedBooks from "./pages/ListedBooks/ListedBooks.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PagesToRead from "./pages/PagesToRead/PagesToRead.jsx";
import Books from "./pages/HomePage/Books/Books.jsx";
import Reviews from "./pages/Reviews/Reviews.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
      },
      {
        path: "/latest-books",
        element: <Books />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
    <ToastContainer />
  </StrictMode>
);
