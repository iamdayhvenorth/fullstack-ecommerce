import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { productCat } from "@/data";
import Image from "next/image";

export default function CategoryCard() {
  return (
    <Carousel>
      <CarouselContent className="mx-1 space-x-4">
        {productCat.map((prod) => (
          <CarouselItem
            key={prod.id}
            className="border  max-w-[200px]  py-4 px-3 flex flex-col items-center"
          >
            <div>
              <Image
                src={prod.img}
                alt={prod.alt}
                width={148}
                height={148}
                className="object-cover"
                priority
              />
            </div>
            <h4 className="text-center font-medium text-base text-dark ">
              {prod.cat}
            </h4>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-dark hover:text-white hover:bg-[#fa8232] disabled:bg-slate-400" />
      <CarouselNext className="text-dark hover:text-white hover:bg-[#fa8232] disabled:bg-slate-400" />
    </Carousel>
  );
}
