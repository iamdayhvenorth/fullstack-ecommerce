import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function MyCarousel() {
  return (
    <section>
      <div className="w-full max-w-[1100px] mx-auto py-5 px-4 border">
        <Carousel className="w-full ">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 max-w-fit border-none">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
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
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
