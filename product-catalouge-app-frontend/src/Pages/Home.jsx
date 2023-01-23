import React, { useEffect, useState } from "react";
import Banner from "../components/app/Banner";
import CategorySlider from "../components/app/CategorySlider";
import { Investors } from "../components/app/Investors";
import Partners from "../components/app/Partners";
import { Teams } from "../components/app/Teams";
import WelcomeText from "../components/app/WelcomeText";
import HomeSlider from "../components/core/HomeSlider";
import LoadingSpinner from "../components/core/LoadingSpinner";
import Slider from "../components/core/Slider";
import { CategoryData } from "../constants/Constants";

const Home = () => {
  const [loadingData, setLoadingData] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/products/?ordering=-id/`
        );
        const data = await response.json();

        setProducts(data.results);
        setLoadingData(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    loadData();
  }, []);

  if (loadingData) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <WelcomeText>Welcome to sasol</WelcomeText>
      <Slider />
      <Partners />
      <HomeSlider products={products} />
      <CategorySlider
        slidesPerView={2}
        heading="Products Category"
        categoryData={CategoryData}
      />
      <Investors />
      <Teams />
      <CategorySlider
        slidesPerView={1}
        heading="Client Reviews"
      ></CategorySlider>
      <Banner />
    </>
  );
};

export default Home;
