import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import { User } from "lucide-react";

const UserIcon = () => {
  const router = useRouter();
  const { isSignedIn, user } = useUser();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleIconClick = () => {
    if (isSignedIn) {
      router.push("/user-profile");
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <div className="relative">
      {isSignedIn ? (
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-8 h-8",
              userButtonPopoverCard: "min-w-[240px]",
            },
          }}
          userProfileMode="navigation"
          userProfileUrl="/user-profile"
        />
      ) : (
        <button
          onClick={handleIconClick}
          className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100"
        >
          <User className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default UserIcon;