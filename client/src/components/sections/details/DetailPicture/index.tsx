import * as React from "react";
import AutoPlay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Autoplay } from "swiper/modules";

export function DetailPicture(props: { images?: string[] }) {
  const pictures = [
    "https://i.pinimg.com/736x/67/86/94/67869432930f288a4f31328f20793cc8.jpg",
    "https://i.pinimg.com/736x/67/86/94/67869432930f288a4f31328f20793cc8.jpg",
  ];

  const { images = pictures } = props;
  const plugin = React.useRef(
    AutoPlay({ delay: 1500, stopOnInterraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full p-3 rounded-lg shadow-xl  "
    >
      <CarouselContent className="-ml-1 mt-[100px]">
        {images.map((picture: any, index: number) => (
          <CarouselItem
            key={index}
            className="pl-1  sm:basis-1 md:basis-1/2 lg:basis-1/3 "
          >
            <div className="p-1 ">
              <Card className=" h-[400px] ">
                <img
                  src={picture}
                  alt=""
                  className="h-full w-full rounded-lg object-cover"
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
