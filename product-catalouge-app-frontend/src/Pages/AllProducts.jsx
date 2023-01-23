import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Products from "../components/app/Products";
import LoadingSpinner from "../components/core/LoadingSpinner";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [previousUrl, setPreviousUrl] = useState(null);

  const { isLoading } = useQuery({
    queryKey: ["api", "products", "ordering", "id"],
    queryFn: async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_END_POINT}api/products/?ordering=-id`
        );
        const data = await response.json();
        setNextUrl(data.next);
        setPreviousUrl(data.previous);
        setProducts(data.results);
        return data;
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Products
      setNextUrl={setNextUrl}
      setPreviousUrl={setPreviousUrl}
      setProducts={setProducts}
      products={products}
      nextUrl={nextUrl}
      previousUrl={previousUrl}
    />
  );
};

export default AllProducts;
