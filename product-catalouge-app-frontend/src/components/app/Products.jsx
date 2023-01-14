import { useState } from "react";
import Heading from "../core/Heading";

import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  const [search, setSearch] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);

  const handleSearch = async () => {
    if (search) {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/products/?search=${search}`
        );

        const data = await response.json();

        if (data.length === 0) {
          setNoDataFound(true);
        }

        if (response.ok) {
          setSearchResults(data);
          setSearch(null);
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <>
      <div className="min-h-screen">
        <Heading>Search Your Product</Heading>
        <div className="flex justify-center items-center">
          <input
            onChange={(e) => setSearch(e.target.value)}
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
      </div>
    </>
  );
};

export default Products;
