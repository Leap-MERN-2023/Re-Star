import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import {Card, CardContent} from "@/components/ui/card"


 const About = () =>{
return (
 <Card>
    <h1>Who we are</h1>
    <p>about us </p>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    <CardContent>
  <Carousel>
  <CarouselContent>
    <CarouselItem><img src=""></img></CarouselItem>
    <CarouselItem><img src=""></img></CarouselItem>
    <CarouselItem><img src=""></img></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
<div> From our blog
Explore our blog for insightful articles, personal reflections, impactful resources, and ideas that inspire us at Re-star </div>
<div>Us</div>
</CardContent>
</Card>
);
};
export default About;