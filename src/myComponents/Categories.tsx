import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Categories() {
  return (
    <section className="py-6">
      <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
        <div>
          <h1 className="text-center text-[2rem] font-semibold leading-10 text-dark my-3 ">
            Shop with Categories
          </h1>

          <div className="grid grid-cols-6 relative gap-3 py-3">
            <div className="border py-4 px-3 flex flex-col items-center">
              <div>
                <Image
                  src="/images/monitor-and-keyboard.png"
                  alt="Monitor & Keyboard"
                  width={148}
                  height={148}
                  className="object-cover"
                />
              </div>
              <h4 className="text-center font-medium text-base text-dark ">
                TV & Homes
              </h4>
            </div>
            <div className="border py-4 px-3 flex flex-col items-center">
              <div>
                <Image
                  src="/images/black-iphone.png"
                  alt="Black Iphone"
                  width={148}
                  height={148}
                  className="object-cover"
                />
              </div>
              <h4 className="text-center font-medium text-base text-dark ">
                Computer & Laptop
              </h4>
            </div>
            <div className="border py-4 px-3 flex flex-col items-center">
              <div>
                <Image
                  src="/images/headphone-black.png"
                  alt="Black Headphone"
                  width={148}
                  height={148}
                  className="object-cover"
                />
              </div>
              <h4 className="text-center font-medium text-base text-dark ">
                Smart Phone
              </h4>
            </div>
            <div className="border py-4 px-3 flex flex-col items-center">
              <div>
                <Image
                  src="/images/red-keyboard.png"
                  alt="Red Keyboard"
                  width={148}
                  height={148}
                  className="object-cover"
                />
              </div>
              <h4 className="text-center font-medium text-base text-dark ">
                Accessories
              </h4>
            </div>
            <div className="border py-4 px-3 flex flex-col items-center">
              <div>
                <Image
                  src="/images/canon-camera.png"
                  alt="Canon Camera"
                  width={148}
                  height={148}
                  className="object-cover"
                />
              </div>
              <h4 className="text-center font-medium text-base text-dark ">
                Camera & Photo
              </h4>
            </div>
            <div className="border py-4 px-3 flex flex-col items-center">
              <div>
                <Image
                  src="/images/Led-TV.png"
                  alt="Led TV"
                  width={148}
                  height={148}
                  className="object-cover"
                />
              </div>
              <h4 className="text-center font-medium text-base text-dark ">
                TV & Homes
              </h4>
            </div>

            {/* arrow overlay */}
            <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center absolute top-1/2 -left-6 -translate-y-1/2 bg-[#fa8232] text-white cursor-pointer">
              <MoveLeft />
            </div>
            <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center absolute top-1/2 -right-6 -translate-y-1/2 bg-[#fa8232] text-white cursor-pointer">
              <MoveRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
