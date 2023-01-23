import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import Button from "../components/core/Button";
import Heading from "../components/core/Heading";
import useAuth from "../Hooks/useAuth";

const ProductUpdate = () => {
  const product = useLoaderData();

  const { user } = useAuth();

  // console.log(product);

  const { name, description, price, picture, active } = product;
  const navigate = useNavigate();

  const [activeState, setActiveState] = useState(active);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const form = e.target;

      const name = form.name.value;
      const description = form.description.value;
      const price = form.price.value;
      const picture = form.picture.value;

      const updatedProductObject = {
        User: user?.id,
        name,
        description,
        price,
        picture,
        active: activeState,
      };

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_END_POINT}api/products/${product?.id}/update/`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${localStorage.getItem("auth_token")}`,
            },
            body: JSON.stringify(updatedProductObject),
          }
        );

        const data = await response.json();

        if (response.ok) {
          toast.success("Product Updated");
          navigate("/allproducts");
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    [activeState, navigate, product?.id, user?.id]
  );

  return (
    <>
      <div className="min-h-screen">
        <Heading>
          Update your product{" "}
          <span className="text-blue-400">{product.name}</span>
        </Heading>
        <section className="flex justify-center items-center ">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                name="name"
                defaultValue={name}
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs my-1"
              />
            </div>
            <div>
              <input
                name="description"
                defaultValue={description}
                type="text"
                placeholder="Description..."
                className="input input-bordered w-full max-w-xs my-1 input-lg"
              />
            </div>
            <div>
              <input
                name="price"
                defaultValue={price}
                type="text"
                placeholder="Price"
                className="input input-bordered w-full max-w-xs my-1"
              />
            </div>
            <div>
              <input
                name="picture"
                defaultValue={picture}
                type="text"
                placeholder="Picture Url..."
                className="input input-bordered input-lg w-full max-w-xs my-1"
              />
            </div>
            <div className="flex justify-center">
              <p>
                <span className="text-blue-600 text-lg mr-2">Active</span>
              </p>
              <input
                onChange={() => setActiveState(!activeState)}
                name="active"
                type="checkbox"
                className="toggle"
                checked={activeState}
              />
            </div>
            <div>
              <Button>Update</Button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default ProductUpdate;
