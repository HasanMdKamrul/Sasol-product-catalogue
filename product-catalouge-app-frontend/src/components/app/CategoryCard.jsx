import React from "react";

const CategoryCard = ({ imgSrc, title }) => {
  return (
    <>
      <div className=" mx-2   overflow-hidden lg:h-full rounded-lg shadow-lg bg-gray-800">
        <img
          // width={500}
          // height={500}
          className="object-cover w-full h-56 transform hover:scale-110 ease-in-out duration-500 cursor-pointer "
          src={imgSrc}
          alt="avatar"
        />

        <div className="py-5 text-center">
          <h1 className="block lg:text-2xl font-bold tracking-widest text-gray-800 dark:text-white">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
