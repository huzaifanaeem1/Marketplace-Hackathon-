import { auth, currentUser } from "@clerk/nextjs/server";

export const checkAdmin = async () => {
  const user = await currentUser();
  console.log(user?.publicMetadata); // Check if metadata is available

  return user?.publicMetadata?.role === "admin";
};