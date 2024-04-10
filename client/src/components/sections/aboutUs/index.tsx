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
    <Card className="p-12 flex flex-col justify-center item-center ">
      {/* <img
        className="flex justify-center item-center rounded-sm overflow-hidden"
        src="https://images.unsplash.com/photo-1568031813264-d394c5d474b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVudXxlbnwwfHwwfHx8MA%3D%3D"
      /> */}
      <h1 className="font-bold text-4xl mt-[100px] mb-2">Who we are</h1>
      <Progress className=" bg-slate-300 w-full flex  justify-center" />
      <h2 className=" font-mono text-2xl text-primary mt-4 text-center">
        About us
      </h2>
      <p className=" text-lg flex  mt- font-extralight tracking-wider ">
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
      <div className=" grid-cols-2 justify-center flex mt-10">
        <CardContent>
          <img
            src="./Zoi.png"
            alt="Zoi"
            className="w-[250px] h-[300px] object-cover rounded-2xl"
          />
          <p className="font-bold text-[35px] ">Zoya </p>
          <p className="font-serif text-xl text-wrap">
            Back-end, Front-end Developer <br /> and Team Leader{" "}
          </p>
        </CardContent>
        <CardContent>
          <img
            src="./anna.png"
            alt="Zoi"
            className="w-[300px] h-[300px] object-cover rounded-2xl"
          />
          <p className="font-bold text-[35px] ">Anar </p>
          <p className="font-serif text-xl text-wrap">Front-end Developer </p>
        </CardContent>
        <CardContent>
          <img
            src="./bilguun.jpg"
            alt="Zoi"
            className="w-[250px] h-[300px] object-cover rounded-2xl"
          />
          <p className="font-bold text-[35px] ">Bilguun </p>
          <p className="font-serif text-xl text-wrap">
            Front-end Developer and <br /> Back-end Developer{" "}
          </p>
        </CardContent>
        <CardContent>
          <img
            src="./batbold.png"
            alt="Zoi"
            className="w-[250px] h-[300px] object-cover rounded-2xl"
          />
          <p className="font-bold text-[35px] ">BatBold </p>
          <p className="font-serif text-xl text-wrap">Front-end Developer </p>
        </CardContent>
      </div>
    </Card>
  );
};
export default AboutUs;
