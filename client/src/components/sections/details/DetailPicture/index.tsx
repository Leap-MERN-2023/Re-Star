import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function DetailPicture(images: any) {
  const pictures = [
    {
      img: "https://i.pinimg.com/736x/67/86/94/67869432930f288a4f31328f20793cc8.jpg",
    },
    {
      img: "https://i.pinimg.com/736x/67/86/94/67869432930f288a4f31328f20793cc8.jpg",
    },
    {
      img: "https://i.pinimg.com/736x/67/86/94/67869432930f288a4f31328f20793cc8.jpg",
    },
    {
      img: "https://i.pinimg.com/736x/67/86/94/67869432930f288a4f31328f20793cc8.jpg",
    },
    {
      img: "https://i.pinimg.com/736x/67/86/94/67869432930f288a4f31328f20793cc8.jpg",
    },
  ];
  console.log("images in detailpicture", images);
  return (
    <Carousel className="w-fullp-3 bg-white rounded-lg shadow-xl mt-5">
      <CarouselContent className="-ml-1 ">
        {!images
          ? pictures?.map((picture: any, index: number) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3 "
              >
                <div className="p-1 ">
                  <Card className=" h-[400px] ">
                    <img
                      src={picture}
                      alt=""
                      className="h-full w-full rounded-lg"
                    />
                  </Card>
                </div>
              </CarouselItem>
            ))
          : pictures?.map((picture: any, index: number) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3 "
              >
                <div className="p-1 ">
                  <Card className=" h-[400px] ">
                    <img
                      src={picture.img}
                      alt=""
                      className="h-full w-full rounded-lg"
                    />
                  </Card>
                </div>
              </CarouselItem>
            ))}

        {/* {images.map((e) => (
          <div>{e}</div>
        ))} */}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
