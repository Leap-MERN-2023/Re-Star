import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const AdminPicView = (images: any) => {
  return (
    <>
      <Carousel className="w-full rounded-lg shadow-xl ">
        <CarouselContent className="-ml-1 ">
          {images.images.map((picture: any, index: number) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 "
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
    </>
  );
};
