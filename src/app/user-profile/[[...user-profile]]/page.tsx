 
import { UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Settings, ShoppingBag } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

const AccountPage = async () => {
  const { userId } = await auth();
  

  if (!userId) {
    redirect("/sign-in");
  }
  return (
    <section>
      <div className="mt-40 mb-20 max-w-4xl mx-auto p-10 rounded-3xl">
        <div className="flex justify-center "> 
            <UserProfile />
        </div>
       

        <div className="items-center pt-10  max-w-4xl mx-auto">
          <div className="p-8 bg-gray-100 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-myHeading flex items-center gap-2">
                <ShoppingBag className="w-6 h-6" /> Order History
              </h2>
            </div>
            <p className="text-myGry text-lg">
              You haven&apos;t placed any orders yet.
            </p>
          </div>
          </div>
      </div>
      <hr className="border-t-2 border-myGry my-4 mx-6" />
    </section>
  );
};

export default AccountPage;