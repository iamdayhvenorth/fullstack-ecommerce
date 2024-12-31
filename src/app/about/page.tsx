import NewsLetter from "@/myComponents/NewsLetter";
import TopRated from "@/myComponents/TopRated";
import React from "react";
import Image from "next/image";
import { members } from "@/data";

export default function About() {
  return (
    <section>
      {/* top section */}
      <section className="p-6 ">
        <div className="w-full max-w-[1100px] mx-auto  px-4 ">
          <div className="flex gap-10">
            {/* left section */}
            <div className="w-1/2 flex flex-col gap-4">
              <span className="block uppercase py-1 px-2 text-white rounded-[2px] text-xs bg-[#2da5f3] w-fit font-semibold">
                About Us
              </span>

              <h2 className="text-dark font-semibold text-3xl max-w-[400px]">
                Kinbo - largest electronics retail shop in the world.
              </h2>

              <p className="text-dark font-normal text-base">
                Welcome to Clicon, your one-stop online marketplace for the
                latest in fashion, electronics, home goods, and more! At Clicon,
                we’re committed to providing a seamless shopping experience by
                offering top-quality products at unbeatable prices. Our
                carefully curated selection includes everything from trending
                gadgets to stylish apparel, ensuring that you find exactly what
                you need, whenever you need it. Driven by customer satisfaction,
                we prioritize fast shipping, secure payments, and exceptional
                customer service. Whether you’re shopping for yourself or
                looking for the perfect gift, we’re here to make your shopping
                experience enjoyable and stress-free. Join the Clicon community
                today and discover a world of shopping possibilities!
              </p>

              <ul className="flex flex-col gap-2">
                <li className="text-dark font-normal text-sm flex items-center gap-2">
                  <Image
                    src={"/images/Checks.jpg"}
                    alt="check"
                    height={24}
                    width={24}
                  />
                  Great 24/7 customer services.
                </li>
                <li className="text-dark font-normal text-sm flex items-center gap-2">
                  <Image
                    src={"/images/Checks.jpg"}
                    alt="check"
                    height={24}
                    width={24}
                  />
                  Great 24/7 customer services.
                </li>
                <li className="text-dark font-normal text-sm flex items-center gap-2">
                  <Image
                    src={"/images/Checks.jpg"}
                    alt="check"
                    height={24}
                    width={24}
                  />
                  Great 24/7 customer services.
                </li>
                <li className="text-dark font-normal text-sm flex items-center gap-2">
                  <Image
                    src={"/images/Checks.jpg"}
                    alt="check"
                    height={24}
                    width={24}
                  />
                  Great 24/7 customer services.
                </li>
              </ul>
            </div>

            {/* right img */}
            <div className="w-1/2">
              <Image
                src="/images/about_img.png"
                alt="About"
                width={600}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* team */}
      <section className="px-6 py-10 border-y">
        <div className="w-full max-w-[1100px] mx-auto  px-4 ">
          <div>
            <h2 className="text-2xl font-semibold text-dark text-center capitalize mb-3">
              Our core team members
            </h2>

            <div className="grid grid-cols-4 gap-4 mt-5">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="flex gap-2 border p-2 rounded-[2px] items-center"
                >
                  <div className="border rounded-full w-[60px] h-[60px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-dark font-semibold text-sm capitalize">
                      {member.name}
                    </h3>
                    <p className="text-dark font-normal text-xs">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      {/* <section>
        <Image
          src={"/images/Banner.png"}
          alt="Banner"
          width={1200}
          height={400}
          className="w-full object-cover"
        />
      </section> */}

      {/*Toprated*/}
      <TopRated />

      {/* Newsletter */}
      <NewsLetter />
    </section>
  );
}
