import TeamCard from "./TeamCard";

const OurTeam = () => {
  const team = [
    {
      id: 1,
      username: "John Doe",
      profession: "CEO & Founder",
      imgUrl: "/about/user-1.jpg",
      fbUrl: "https://www.facebook.com/johndoe",
      instaUrl: "https://www.instagram.com/johndoe",
      xUrl: "https://twitter.com/johndoe",
    },
    {
      id: 2,
      username: "Jane Smith",
      profession: "Chief Designer",
      imgUrl: "/about/user-2.jpg",
      fbUrl: "https://www.facebook.com/janesmith",
      instaUrl: "https://www.instagram.com/janesmith",
      xUrl: "https://twitter.com/janesmith",
    },
    {
      id: 3,
      username: "Michael Lee",
      profession: "Lead Developer",
      imgUrl: "/about/user-3.jpg",
      fbUrl: "https://www.facebook.com/michaellee",
      instaUrl: "https://www.instagram.com/michaellee",
      xUrl: "https://twitter.com/michaellee",
    },
  ];
  return (
    <section>
      <div className="flex justify-center items-center flex-col px-12 py-16">
        <div className="flex justify-center items-center flex-col text-center text-myHeading mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h1>
          <h6 className="text-myGry text-sm md:text-base font-semibold mb-2">
            We're a group of passionate professionals dedicated to delivering the best.
          </h6>
          <h6 className="text-myGry text-sm md:text-base font-semibold">
            Our team members come from diverse backgrounds with years of expertise.
          </h6>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((user) => (
            <TeamCard
              key={user.id}
              username={user.username}
              profession={user.profession}
              imgUrl={user.imgUrl}
              fbUrl={user.fbUrl}
              instaUrl={user.instaUrl}
              xUrl={user.xUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;