import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqs } from "@/data";

export default function Help() {
  return (
    <section className="px-6 py-10">
      <div className="w-full max-w-[1100px] mx-auto  px-4">
        <div className="flex gap-10">
          {/* left section faq */}
          <div className="flex-1 flex flex-col gap-5">
            <h2 className="font-semibold text-2xl text-black">
              Frequently Asked Questions
            </h2>
            <div>
              <Accordion
                type="single"
                collapsible
                className="flex flex-col gap-5"
              >
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={faq.id}
                    value={`item ${idx + 1}`}
                    className="border "
                  >
                    <AccordionTrigger className="px-3 py-2 hover:no-underline text-dark ">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="p-3">
                      <p className="text-sm font-normal text-dark ">
                        Nulla malesuada iaculis nisi, vitae sagittis lacus
                        laoreet in. Morbi aliquet pulvinar orci non vulputate.
                        Donec aliquet ullamcorper gravida. Interdum et malesuada
                        fames ac ante ipsum primis in faucibus. Sed molestie
                        accumsan dui, non iaculis magna mattis id. Ut
                        consectetur massa at viverra euismod. Interdum et
                        malesuada fames ac ante ipsum primis in faucibus.
                        Praesent eget sem purus.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* right section */}
          <div className="w-[400px] bg-[#fbf4ce] rounded-sm p-8 h-fit">
            <div>
              <h3 className="text-dark font-medium text-lg">
                Don&apos;t find your answer, Ask for support.
              </h3>
              <p className="text-sm text-dark font-normal my-2">
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Sed molestie accumsan dui, non iaculis primis in faucibu raesent
                eget sem purus.
              </p>
            </div>

            <form className="flex flex-col gap-4 mt-4">
              <input
                type="text"
                placeholder="Email address"
                className="p-2 w-full rounded-[2px] text-sm"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-2 w-full rounded-[2px] text-sm"
                required
              />

              <textarea
                name="mesage"
                id="message"
                placeholder="Message (Optional)"
                className="p-2 w-full rounded-[2px] text-sm resize-y focus:outline-none max-h-36 min-h-20"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
