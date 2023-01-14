import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AddProduct from "../Pages/AddProduct";
import AllProducts from "../Pages/AllProducts";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import ProductDetail from "../Pages/ProductDetail";
import ProductUpdate from "../Pages/ProductUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`http://localhost:8000/api/products/`),
      },
      {
        path: "/allproducts",
        element: <AllProducts />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/allproducts/:id",
        element: <ProductDetail />,
        loader: ({ params: { id } }) =>
          fetch(`http://localhost:8000/api/products/${id}/`),
      },
      {
        path: "/updateproduct/:id",
        element: <ProductUpdate />,
        loader: ({ params: { id } }) =>
          fetch(`http://localhost:8000/api/products/${id}`),
      },
    ],
  },
]);

export default router;
