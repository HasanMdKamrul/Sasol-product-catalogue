import { partnersData } from "../../constants/Constants";
import Heading from "../core/Heading";
import InvestorCard from "./InvestorCard";

export const Investors = () => {
  return (
    <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <Heading>Investors</Heading>
      </div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        {partnersData?.map((investor) => (
          <InvestorCard key={investor?.id} investor={investor} />
        ))}
      </div>
    </div>
  );
};
