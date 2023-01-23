import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Heading from "../core/Heading";

const WelcomeText = ({ children }) => {
  return (
    <>
      <div className="text-center">
        <Heading>
          <p className="h-6">
            <Typewriter loop words={[`${children}`]} />
          </p>
        </Heading>
      </div>
    </>
  );
};

export default WelcomeText;
