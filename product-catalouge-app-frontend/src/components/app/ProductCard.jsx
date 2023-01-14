import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, price, temp_price, picture } = product;

  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/allproducts/${product.id}`);
  };

  return (
    <div className=" overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ">
      <div className="px-4 py-2">
        <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
          {name}
        </h1>
        <h1 className="text-sm font-bold text-white">
          Temp_Price: <span className="text-blue-500">${temp_price}</span>
        </h1>
      </div>

      <img src={picture} className="object-cover w-full h-48 mt-2" alt="" />
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-sm font-bold text-white">${price}</h1>
        <button
          onClick={handleDetail}
          className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
        >
          See details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
