import React from "react";
import TeamCard from "./TeamCard";

const OurTeam = () => {
  const team = [
    {
      id: 1,
      username: "Username",
      profession: "Profession",
      imgUrl: "/about/user-1.jpg",
    },
    {
      id: 2,
      username: "Username",
      profession: "Profession",
      imgUrl: "/about/user-2.jpg",
    },
    {
      id: 3,
      username: "Username",
      profession: "Profession",
      imgUrl: "/about/user-3.jpg",
    },
  ];
  return (
    <section>
      <div className="flex justify-center items-center flex-col px-12 py-16">
        <div className="flex justify-center items-center flex-col text-center text-myHeading mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Meet Our Team</h1>
          <h6 className="text-myGry text-sm md:text-base font-semibold">
            Problems trying to resolve the conflict between
          </h6>
          <h6 className="text-myGry text-sm md:text-base font-semibold">
            the two major realms of Classical physics, Newtonian mechanics
          </h6>
        </div>
        <div className="flex justify-center items-center gap-2 flex-col sm:flex-row">
          {team.map((user) => (
            <TeamCard
              key={user.id}
              username={user.username}
              profession={user.profession}
              imgUrl={user.imgUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
