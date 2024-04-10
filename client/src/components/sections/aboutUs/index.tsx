import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";
import { PiTrademarkLight } from "react-icons/pi";

const AboutUs = () => {
  return (
    <Card className="p-12 flex flex-col justify-center item-center">
      <img
        className="flex justify-center item-center rounded-sm overflow-hidden"
        src="https://images.unsplash.com/photo-1568031813264-d394c5d474b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVudXxlbnwwfHwwfHx8MA%3D%3D"
      />
      <h1 className="font-bold text-4xl mt-16 mb-2">Who we are</h1>
      <Progress className="w-[100%] bg-slate-300 " />
      <h2 className=" font-mono text-2xl text-slate-700 mt-8">About us</h2>
      <p className=" text-lg flex w-1/2 mb-32 font-extralight">
        What is Re-Star? Re-Star is the first Mongolian review application
        focusing on the plethora of restaurants and services in Ulaanbaatar to
        give users the chance to give honest reviews and share experiences at
        establishments they visited. You can learn more about Re-Star by
        scrolling down below. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
      <CardContent>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="flex justify-center rounded-sm  overflow-hidden">
              <img src="https://plus.unsplash.com/premium_photo-1661281337214-c5f344300d92?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D"></img>
            </CarouselItem>
            <CarouselItem className="flex justify-center rounded-sm overflow-hidden">
              <img src="https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D"></img>
            </CarouselItem>
            <CarouselItem className="flex justify-center rouned-sm overflow-hidden">
              <img src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D"></img>
            </CarouselItem>
            <CarouselItem className="flex justify-center rounded-sm overflow-hidden">
              <img src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmV2aWV3fGVufDB8fDB8fHww"></img>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="m-10 font-thin flex justify-center ">
          Explore our blog for insightful articles, personal reflections,
          impactful resources, and ideas that inspire us at Re-star{" "}
          <FaArrowDown className="ml-2 mt-1 flex justify-center item-center" />
        </div>

<<<<<<< HEAD
 const AboutUs = () =>{
return (
 <Card className="p-12 flex flex-col justify-center item-center ">
  <img className="flex justify-center item-center rounded-sm overflow-hidden mt-12" src="https://images.unsplash.com/photo-1568031813264-d394c5d474b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVudXxlbnwwfHwwfHx8MA%3D%3D"></img>
  <h1 className="font-bold text-4xl mt-16 mb-2">Who we are</h1>
  <Progress className="w-[100%] bg-slate-300 " />
    <h2 className=" font-mono text-2xl text-slate-700 mt-8">About us</h2>
    <p className=" text-lg flex w-1/2 mb-20 font-extralight">What is Re-Star? Re-Star is the first Mongolian review application focusing on the plethora of restaurants and services in Ulaanbaatar to give users the chance to give honest reviews and share experiences at establishments they visited. You can learn more about Re-Star by scrolling down below. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <CardContent>
  <Carousel>
  <CarouselContent className="">
    <CarouselItem className="flex justify-center rounded-sm overflow-hidden  "><img src="https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/411400946_760266329463822_4491324963908068826_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CoeuYmBlHwMAb4U3k6A&_nc_ht=scontent.fuln2-2.fna&oh=00_AfCDUw3-gAewYuiv9XChorb7j8ZGn4Y0K55zWI5fm6Gzaw&oe=661C1157"></img></CarouselItem>
    <CarouselItem className="flex justify-center rounded-sm overflow-hidden"><img src="https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/411401738_760296939460761_8233202745768504103_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=acujalOzFHUAb6Z9RBl&_nc_ht=scontent.fuln2-2.fna&oh=00_AfCuc_PcQGDu0w8NWaJfRtB8XtUsTBEogJDUJOYn2ozFag&oe=661C1BF3"></img></CarouselItem>
    <CarouselItem className="flex justify-center rouned-sm overflow-hidden"><img src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D"></img></CarouselItem>
    <CarouselItem className="flex justify-center rounded-sm overflow-hidden"><img src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmV2aWV3fGVufDB8fDB8fHww"></img></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
<div className="m-10 font-thin flex justify-center ">
Explore our blog for insightful articles, personal reflections, impactful resources, and ideas that inspire us at Re-star  <FaArrowDown className="ml-2 mt-1 flex justify-center item-center"/></div>

<Link className="flex justify-center font-bold text-3xl text-blue-300" href={""}>BLOG</Link>
<div className="flex justify-center item-center mt-10 font-extralight">From the team at Re-Star <PiTrademarkLight /></div>
</CardContent>
</Card>
);
=======
        <Link
          className="flex justify-center font-bold text-3xl text-blue-300"
          href={""}
        >
          BLOG
        </Link>
        <div className="flex justify-center item-center mt-10 font-extralight">
          From the team at Re-Star <PiTrademarkLight />
        </div>
      </CardContent>
    </Card>
  );
>>>>>>> cc586b0 (bug fix (#201))
};
export default AboutUs;
