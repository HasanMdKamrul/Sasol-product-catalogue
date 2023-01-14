import React from "react";
import { useLoaderData } from "react-router-dom";
import HomeSlider from "../components/core/HomeSlider";

const Home = () => {
  const products = useLoaderData();
  return <HomeSlider products={products} />;
};

export default Home;
