import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const socialLinks = [
    {
      id: 1,
      icon: "/icons/insta.png",
      url: "https://www.instagram.com",
    },
    {
      id: 2,
      icon: "/icons/yt.png",
      url: "https://www.instagram.com",
    },
    {
      id: 3,
      icon: "/icons/fb-icon.png",
      url: "https://www.instagram.com",
    },
    {
      id: 4,
      icon: "/icons/twitter.png",
      url: "https://www.instagram.com",
    },
  ];
  return (
    <div className="w-full px-8 py-6 hidden sm:flex justify-between items-center bg-[#252B42] text-white ">
      <div className="flex justify-center items-center gap-4">
        {/* Phone no */}
        <div className="flex justify-center items-center gap-1">
          <Image
            src={"/icons/call-icon.png"}
            alt="call"
            width={16}
            height={12}
          />
          <span>(225) 0555 4342</span>
        </div>

        {/* Email */}
        <div className="flex justify-center items-center gap-1">
          <Image src={"/icons/mail.png"} alt={"mail"} width={16} height={12} />
          abc@gmail.com
        </div>
      </div>
      <p className="font-semibold">Follow us and get a chance to win 80% Off</p>
      <div className="flex items-center justify-center gap-3">
        <span>Follow us :</span>
        {/* Social Links */}
        {socialLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <Image src={link.icon} alt="social" width={16} height={16} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
