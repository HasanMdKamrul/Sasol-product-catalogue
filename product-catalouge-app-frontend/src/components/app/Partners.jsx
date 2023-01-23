import React from "react";
import Marquee from "react-fast-marquee";
import Heading from "../core/Heading";

const Partners = () => {
  return (
    <>
      <Heading>Our Partners</Heading>

      <div>
        <Marquee gradient={false}>
          <div className="mx-2">
            <img
              src="https://www.sasol.com/sites/default/files/2022-05/governance.jpg"
              alt=""
            />
          </div>
          <div className="mx-2">
            <img
              src="https://www.sasol.com/sites/default/files/2021-10/investor-meeting.jpg"
              alt=""
            />
          </div>
          <div className="mx-2">
            <img
              src="https://www.sasol.com/sites/default/files/2022-06/DividendInfo.jpg"
              alt=""
            />
          </div>
          <div className="mx-2">
            <img
              src="https://www.sasol.com/sites/default/files/2022-06/Khanyisa.jpg"
              alt=""
            />
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Partners;
