import Lottie from "lottie-react";
import React from "react";
import welcomeanimation from "../assests/Animations/banneranimation.json";
import Heading from "../components/core/Heading";

const Dashboard = () => {
  return (
    <>
      <Heading>Welcome to admin panel</Heading>
      <div className="flex justify-center w-full">
        <Lottie className="w-1/2" animationData={welcomeanimation} />
      </div>
    </>
  );
};

export default Dashboard;
