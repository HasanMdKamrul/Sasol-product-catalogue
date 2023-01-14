import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/core/Button";
import Heading from "../components/core/Heading";

const AddProduct = () => {
  const [activeState, setActiveState] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const picture = form.picture.value;

    const newProductObject = {
      name,
      description,
      price,
      picture,
      active: activeState,
    };

    try {
      const response = await fetch(`http://localhost:8000/api/products/add/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProductObject),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/allproducts");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="min-h-screen">
        <Heading>Add Your Product</Heading>
        <section className="flex justify-center items-center ">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs my-1"
              />
            </div>
            <div>
              <input
                name="description"
                type="text"
                placeholder="Description..."
                className="input input-bordered w-full max-w-xs my-1 input-lg"
              />
            </div>
            <div>
              <input
                name="price"
                type="text"
                placeholder="Price"
                className="input input-bordered w-full max-w-xs my-1"
              />
            </div>
            <div>
              <input
                name="picture"
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
              <Button>Add Product</Button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddProduct;
