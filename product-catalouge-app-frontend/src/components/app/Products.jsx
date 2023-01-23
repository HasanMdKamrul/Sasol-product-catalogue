import { useCallback, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Heading from "../core/Heading";

import ProductCard from "./ProductCard";

const Products = ({
  products,
  nextUrl,
  previousUrl,
  setProducts,
  setNextUrl,
  setPreviousUrl,
}) => {
  const [search, setSearch] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);

  const handleSearch = useCallback(async () => {
    if (search) {
      try {
        const response = await fetch(
          `http://localhost:8000/api/products/?search=${search}`
        );

        const data = await response.json();

        if (data.results.length === 0) {
          setNoDataFound(true);
        }

        if (response.ok) {
          setSearchResults(data.results);
          // setSearch(null);
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      setSearchResults([]);
    }
  }, [search]);

  const handlePagination = useCallback(
    async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.results);
        setNextUrl(data.next);
        setPreviousUrl(data.previous);
      } catch (error) {
        console.log(error.message);
      }
    },
    [setNextUrl, setPreviousUrl, setProducts]
  );

  return (
    <>
      <div className="min-h-screen">
        <Heading>Search Your Product</Heading>
        <div className="flex justify-center items-center">
          <input
            onBlur={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="Search By Name..."
            className="input input-bordered w-full tracking-wide max-w-xs"
          />
          <button onClick={handleSearch} className="btn btn-accent ml-2">
            Search
          </button>
        </div>
        {searchResults.length > 0 && (
          <div className="flex justify-center items-center my-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-20 gap-5">
              {searchResults?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
        {noDataFound && searchResults.length === 0 && (
          <Heading>No Data Found</Heading>
        )}
        <Heading>All Our Products</Heading>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-20 gap-5">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-12">
          {previousUrl && (
            <button
              onClick={() => handlePagination(previousUrl)}
              className="btn btn-outline btn-sm mr-2"
            >
              <FaArrowLeft className="mr-2" />
              Previous
            </button>
          )}
          {nextUrl && (
            <button
              onClick={() => handlePagination(nextUrl)}
              className="btn btn-outline btn-sm"
            >
              Next
              <FaArrowRight className="ml-2" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
