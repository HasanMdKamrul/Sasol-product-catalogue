import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyProductCard from "../components/app/MyProductCard";
import Heading from "../components/core/Heading";
import LoadingSpinner from "../components/core/LoadingSpinner";
import useAuth from "../Hooks/useAuth";

const MyProducts = () => {
  const [myProducts, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(myProducts);

  const { user } = useAuth();

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/products/user/${user?.id}/`,
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("auth_token")}`,
            },
          }
        );
        const data = await response.json();
        setMyProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadData();
  }, [user?.id]);

  // const { isLoading } = useQuery({
  //   queryKey: ["api", "products", "user", `${user?.id}`],
  //   queryFn: async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:8000/api/products/user/${user?.id}/`,
  //         {
  //           headers: {
  //             Authorization: `Token ${localStorage.getItem("auth_token")}`,
  //           },
  //         }
  //       );
  //       const data = await response.json();
  //       setMyProducts(data);
  //       return data;
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   },
  // });

  if (loading) {
    return <LoadingSpinner />;
  }
  // !loading &&

  return (
    <>
      {myProducts.length > 0 ? (
        <>
          <Heading>Products added by you</Heading>
          <div className="px-4  min-h-screen py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
              {myProducts?.map((product, index) => (
                <MyProductCard product={product} key={index} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-screen">
          <Heading>No Products added by you</Heading>
          <div className="flex justify-center items-center">
            <Link to={`/addproduct`}>
              <button className="btn btn-outline">Add Product</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MyProducts;
