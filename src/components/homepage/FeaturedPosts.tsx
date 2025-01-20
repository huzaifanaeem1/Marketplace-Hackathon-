import React from "react";
import PostCard from "../PostCard";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      imgUrl: "/posts/post-bg-1.png",
      title: "Loudest à la Madison #1 (L'integral)",
      desc:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "19 January 2025",
      commentCount: 10,
    },
    {
      id: 2,
      imgUrl: "/posts/post-bg-2.png",
      title: "Loudest à la Madison #1 (L'integral)",
      desc:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "16 January 2025",
      commentCount: 10,
    },
    {
      id: 3,
      imgUrl: "/posts/post-bg-3.png",
      title: "Loudest à la Madison #1 (L'integral)",
      desc:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "15 January 2025",
      commentCount: 10,
    },
  ];

  return (
    <section className="mt-20">
      <div className="container px-16 py-20 mx-auto">
        <div className="items-center text-center text-[#272343] space-y-2">
          <h3 className="text-xl font-semibold text-myGry">
            Practice Advice
          </h3>
          <h1 className="text-4xl font-bold">Featured Posts</h1>
          <h6 className="text-[#737373]">
            Problems trying to resolve the conflict between <br />
            The two major realms of Classical Physics: Newtonian mechanics
          </h6>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              imgUrl={post.imgUrl}
              title={post.title}
              desc={post.desc}
              date={post.date}
              commentCount={post.commentCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
