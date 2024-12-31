import { House, MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="p-10">
      <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
        <div className="flex items-center justify-center">
          <div className="max-w-[600px] flex flex-col items-center gap-3 p-4">
            <div>
              <Image
                src="/images/not-found.png"
                alt="Not Found"
                width={400}
                height={400}
              />
            </div>

            <div className="flex flex-col items-center gap-4">
              <h2 className="font-semibold text-3xl text-center text-dark">
                404, Page not found
              </h2>
              <p className="font-normal text-base text-center text-gray-700">
                Something went wrong. It’s look that your requested page could
                not be found. It’s look like the link is broken or the page is
                removed.
              </p>
              <div className="flex gap-3">
                <Link
                  href="/"
                  className="rounded-sm uppercase text-sm font-bold leading-6  py-2 px-5 text-[#fa8232] bg-white border border-[#fa8232] hover:text-white hover:bg-[#fa8232] transition-colors duration-200 ease-linear flex items-center gap-2 justify-center w-fit"
                >
                  <MoveLeft />
                  Go Back
                </Link>
                <Link
                  href="/"
                  className="rounded-sm uppercase text-sm font-bold leading-6 border border-[#fa8232] text-[#fa8232] py-2 px-5 flex items-center gap-2 justify-center  hover:text-white hover:bg-[#fa8232] transition-colors duration-200 ease-linear"
                >
                  <House />
                  Go to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
