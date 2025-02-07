import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export { metadata, viewport } from "next-sanity/studio";

export default async function StudioPage() {
  const { userId } = await auth();

  // Redirect to sign-in if the user is not authenticated
  if (!userId) {
    redirect("/sign-in");
  }

  return <NextStudio config={config} />;
}