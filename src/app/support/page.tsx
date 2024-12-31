import { MessageCircleMore, PhoneCall, Search } from "lucide-react";
import React from "react";
import { popularTopics, support } from "@/data";
import { FaArrowRight } from "react-icons/fa";
export default function page() {
  return (
    <>
      <section className="p-6 ">
        <div className="w-full max-w-[1100px] mx-auto  px-4 ">
          <div>
            <div className="py-4">
              <div className="flex flex-col gap-2">
                <span className="block py-2 px-4 rounded-sm uppercase text-sm text-dark font-semibold bg-[#efd33d] w-fit">
                  help center
                </span>

                <h2 className="font-semibold text-3xl text-dark">
                  How we can help you!
                </h2>

                <form className="border rounded-sm p-2 flex items-center gap-2 max-w-[500px]">
                  <label htmlFor="keyword" className="text-[#fa8232]">
                    <Search size={18} />
                  </label>
                  <input
                    type="text"
                    name="keyword"
                    id="keyword"
                    placeholder="Enter your question or keyword"
                    required
                    autoComplete="off"
                    className="px-2 inline-block text-sm flex-1"
                  />
                  <button
                    type="submit"
                    className="bg-[#fa8232] py-2 px-4 rounded-sm text-white font-semibold uppercase opacity-80 hover:opacity-100 transition-opacity duration-200 ease-linear text-sm"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-6 border-y">
        <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
          <div>
            <h2 className="text-dark text-3xl font-semibold text-center">
              What can we assist you with today?
            </h2>

            <div className="grid grid-cols-4 mt-3 gap-3 py-4">
              {support.map(({ id, Icon, title }) => (
                <div
                  className="border border-[#fa8232] rounded-sm p-4 flex items-center justify-start gap-3 font-medium"
                  key={id}
                >
                  {<Icon size={18} className="text-[#fa8232]" />}

                  <span className="text-sm text-dark ">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="p-6">
        <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
          <div>
            <h2 className="text-dark text-3xl font-semibold text-center">
              Popular Topics
            </h2>

            <div className="mt-3">
              <div className="p-4">
                <ul className="list-disc grid grid-cols-3 gap-5">
                  {popularTopics.map(({ id, topic }) => (
                    <li
                      className="text-dark font-normal text-sm hover:text-[#fa8232] select-none"
                      key={id}
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-6 bg-[#f2f4f5]">
        <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
          <div>
            <div className="flex flex-col gap-3 items-center">
              <span className="bg-[#2da5f3] py-2 px-4 rounded-sm text-white text-sm font-semibold ">
                Contact Us
              </span>
              <h2 className="text-center font-semibold text-3xl text-dark">
                Didn’t find your answer. Contact with us
              </h2>
            </div>

            <div className="flex gap-4 p-4">
              <div className="p-4 flex gap-3 bg-white rounded-sm shadow-[0px_5px_17px_-4px_rgba(0,0,0,0.37)]">
                <div className="w-[80px] h-[64px] flex items-center justify-center bg-[#eaf6fe] rounded-sm">
                  <PhoneCall className="text-[#2da5f3]" />
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-gray-900 font-semibold text-lg">
                    Call us now
                  </h4>

                  <p className="text-dark text-sm font-normal ">
                    we are available online from 9:00 AM to 5:00 PM (GMT95:45)
                    Talk with use now
                  </p>

                  <span className="text-dark text-xl font-normal block">
                    +1-202-555-0126
                  </span>

                  <button className="uppercase bg-[#2da5f3] rounded-sm py-2 px-4 text-white text-sm font-semibold opacity-85 hover:opacity-100 transition-opacity duration-200 ease-linear w-fit flex items-center gap-2">
                    Call Now
                    <FaArrowRight className="mt-[1px]" />
                  </button>
                </div>
              </div>

              <div className="p-4 flex gap-3 bg-white rounded-sm shadow-[0px_5px_17px_-4px_rgba(0,0,0,0.37)]">
                <div className="w-[80px] h-[64px] flex items-center justify-center bg-[#eaf6fe] rounded-sm">
                  <MessageCircleMore className="text-green-500" />
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-gray-900 font-semibold text-lg">
                    Chat with us
                  </h4>

                  <p className="text-dark text-sm font-normal ">
                    we are available online from 9:00 AM to 5:00 PM (GMT95:45)
                    Talk with use now
                  </p>

                  <span className="text-dark text-xl font-normal block">
                    Support@clicon.com
                  </span>

                  <button className="uppercase bg-[#2db224] rounded-sm py-2 px-4 text-white text-sm font-semibold opacity-85 hover:opacity-100 transition-opacity duration-200 ease-linear w-fit flex items-center gap-2">
                    Contact Us
                    <FaArrowRight className="mt-[1px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
