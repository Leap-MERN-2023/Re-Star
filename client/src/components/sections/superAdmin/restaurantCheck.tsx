import { Card } from "@/components/ui/card";
import { RestaurantContext } from "@/context/RestaurantProvider";
import React, { useContext } from "react";
import Router, { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const RestaurantCard = () => {
  const getRestaurant = useContext(RestaurantContext);
  const { org } = useContext(RestaurantContext);
  const router = useRouter();

  return (
    <div className="flex flex-wrap justify-around gap-10">
      {org.map((e) => (
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-[250px] shadow-2xl rounded-2xl h-[200px] p-2 justify-center relative overflow-hidden group"
            >
              <h1 className="font-medium  text-2xl items-center z-20 text-white">
                {e.name}
              </h1>
              <div className="absolute h-full w-full top-0 left-0 z-10">
                <img
                  className="w-full h-full object-cover blur-[2px] group-hover:scale-125 transform transition-all"
                  src={e.images.at(0)}
                  alt=""
                />
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] lg:max-w-[725px] ">
            <DialogHeader>
              <DialogTitle>Restaurant Check</DialogTitle>
              <DialogDescription>
                Check restaurant here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4 ">
              <div className="grid grid-cols-4  gap-4  items-center">
                <Label htmlFor="name">Name:</Label>
                <div className="w-[400px]">{e.name}</div>
              </div>
              <div className="grid grid-cols-4  gap-4 justify-center items-center">
                s<Label htmlFor="username">Address:</Label>
                <div className="w-[400px]">{e.address}</div>
              </div>
              <div className="grid grid-cols-4  gap-4 justify-center items-center">
                <Label htmlFor="username">Description:</Label>
                <div className="w-[400px]">{e.description}</div>
              </div>
              <div className="grid grid-cols-4  gap-4 justify-center items-center">
                <Label htmlFor="username">Phone:</Label>
                <div className="w-[400px]">{e.phoneNumber}</div>
              </div>
              <div className="grid grid-cols-4  gap-4 justify-center items-center">
                <Label htmlFor="username">Category:</Label>
                <div className="w-[400px]">{e.category}</div>
              </div>
              <div className="grid grid-cols-4  gap-4 justify-center items-center">
                <Label htmlFor="username">Images:</Label>
                <div className="w-[500px] flex gap-2 overflow-hidden overflow-x-auto">
                  {e.images.map((img) => (
                    <img src={img} alt="" className="h-[250px] " />
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter className="gap-2">
              <Button
                type="submit"
                //   onClick={() => formik.handleSubmit()}
                className="w-full bg-[#61b23f]"
              >
                Add Restaurant
              </Button>
              <Button
                type="submit"
                //   onClick={() => formik.handleSubmit()}
                className="w-full bg-[#a83c3c]"
              >
                Decline Restaurant
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default RestaurantCard;
