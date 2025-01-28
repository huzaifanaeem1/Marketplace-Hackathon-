import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="max-w-[1280px] m-auto min-h-[70vh] p-3 pt-28 pb-20">
      <div className="w-full xs:py-20 py-10 flex md:gap-10 gap-5">
        <div className="md:w-1/2 w-full md:block hidden rounded-md overflow-hidden">
          <Image
            src="/auth/signup-page.jpg"
            alt="Sign Up Page Image"
            width={805}
            height={781}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="md:w-1/2 w-full m-auto xs:px-20 px-2">
          <SignUp />
        </div>
      </div>
    </div>
  );
}