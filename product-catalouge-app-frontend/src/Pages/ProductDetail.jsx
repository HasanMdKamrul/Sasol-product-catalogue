import { useCallback } from "react";
import { toast } from "react-hot-toast";
import { FaCheck, FaMinus, FaMoneyBillWave } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Heading from "../components/core/Heading";

const ProductDetail = () => {
  const navigate = useNavigate();
  const product = useLoaderData();

  // console.log(product);

  const handledelete = useCallback(
    async (id) => {
      // console.log(id);
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/products/${id}/delete`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Token ${localStorage.getItem("auth_token")}`,
            },
          }
        );
        const data = await response.json();
        if (response.ok) {
          toast.success("Delete Successful");
          navigate("/allproducts");
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    [navigate]
  );

  return (
    <>
      <div className="min-h-screen">
        <Heading>
          Details of <span className="text-blue-400">{product?.name}</span>
        </Heading>
        <>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
              <div className="relative lg:w-1/2">
                <img
                  src={product?.picture}
                  alt=""
                  className="object-cover w-full lg:absolute h-80 lg:h-full"
                />
                <svg
                  className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                  viewBox="0 0 20 104"
                  fill="currentColor"
                >
                  {/* <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" /> */}
                </svg>
              </div>
              <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    Product Details
                  </p>
                </div>
                <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                  {product?.name}
                </h5>
                <p className="mb-5 text-gray-800">
                  <span className="text-gray-600">{product?.description}</span>
                </p>
                <p className="flex items-center">
                  <FaMoneyBillWave className="text-blue-600 mr-2 text-3xl" />
                  <span className="text-blue-600 text-xl font-bold">
                    Price: {product?.price}{" "}
                  </span>
                </p>
                <p className="flex items-center my-2">
                  <FaMoneyBillWave className="text-orange-600 mr-2 text-3xl" />
                  <span className="text-orange-600 text-xl font-bold">
                    Temp_Price: {product?.temp_price}{" "}
                  </span>
                </p>
                {product.active ? (
                  <p className="flex items-center my-2">
                    <FaCheck className="text-cyan-600 mr-2 text-3xl" />
                    <span className="text-cyan-500 text-xl font-bold">
                      Active
                    </span>
                  </p>
                ) : (
                  <p className="flex items-center my-2">
                    <FaMinus className="text-cyan-600 mr-2 text-3xl" />
                    <span className="text-cyan-500 text-xl font-bold">
                      Not Active
                    </span>
                  </p>
                )}
                <div className="flex items-center">
                  <Link to={`/updateproduct/${product?.id}`}>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Update Product
                    </button>
                  </Link>
                  <button
                    onClick={() => handledelete(product?.id)}
                    type="submit"
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Delete Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default ProductDetail;
