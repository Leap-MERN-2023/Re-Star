import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { TbBellMinusFilled, BsBagCheckFill } from "@/components/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function StepThree({ className, ...props }: CardProps) {
  return (
    <div className="flex justify-center items-center lg:mx-[20%] lg:my-[10%] bg-orange-100">
      <Card className={cn("w-full p-20  ", className)} {...props}>
        <CardHeader>
          <CardTitle className="self-center">
            Thanks for registering your Restaurant on Re-star
          </CardTitle>
          <CardDescription className="self-center">
            You can see your restaurant now
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 justify-evenly w-full">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <div>
              <BsBagCheckFill className="w-20 h-20" color="green" />
            </div>
            <div className=" space-y-1 ">
              <p className=" font-medium leading-none text-3xl">
                Registering process is done
              </p>
            </div>
            <div>
              <TbBellMinusFilled className="w-20 h-20" color="green" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Go To Dashboard</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
