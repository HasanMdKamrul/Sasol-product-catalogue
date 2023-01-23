import Heading from "../core/Heading";
import TeamCard from "./TeamCard";

export const Teams = () => {
  return (
    <>
      <Heading>Discover Our Team</Heading>
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            Discover Our Team
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            Discover Our Team of Heros
          </p>
        </div>
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          {[...Array(4).keys()].map((item, index) => (
            <TeamCard key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
