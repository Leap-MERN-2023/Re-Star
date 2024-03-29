"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"
import { Avatar,AvatarImage,AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { useContext, useEffect, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { MdRestaurantMenu } from "react-icons/md";
import React from "react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
  } from "@/components/ui/command"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Check, ChevronsUpDown } from "lucide-react"
import { useFormik } from "formik";
// import { MenuContext } from "@/context/MenuProvider";


const categories = [
    {
      value: "Korean Food",
      label: "Korean Food",
    },
    {
      value: "Mongolian Food",
      label: "Mongolian Food",
    },
    {
      value: "Indian Food",
      label: "Indian Food",
    },
    {
      value: "Japanese Food",
      label: "Japanese Food",
    },
    {
      value: "Fast Food",
      label: "Fast Food",
    },
  ]
export function MenuModal() {   
    const formik = useFormik({
        initialValues: {
          name: '',
          category: '',
          description: '',
          price: '',
          image: '',
        },
        onSubmit: (values:any) => {
          console.log( "Menu Item values",values);
          alert(JSON.stringify(values, null, 2));
          },
        });
    // const [open, setOpen] = React.useState(false)
    // const [value, setValue] = React.useState("")
    // const [isDisabled, setIsDisabled] = useState(true);

    // useEffect(() => {
    //     if (value=== null) {
    //       setIsDisabled(true);
    //     } else {
    //       setIsDisabled(false);
    //     }
    //   }, [value]);
  return (
    <form onSubmit={formik.handleSubmit}>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <MdRestaurantMenu color="#858484" size={"25px"} style={{ margin: 4 }} />
          Add Menu Item
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add menu </DialogTitle>
          <DialogDescription>
          Add a new menu item to your restaurant
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
         
          </div>
          <div className=" flex flex-col items-start gap-4 justify-start">
            <Label htmlFor="NameFood" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              className="w-64"
              placeholder="Name of Item."
              onChange={formik.handleChange}
              value={formik.values.name}
          
            />
    <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea    
             id="description"
              onChange={formik.handleChange}
              value={formik.values.description}  /> 
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              id="price"
              className="w-64"
              placeholder="Price of Item."
              onChange={formik.handleChange}
              value={formik.values.price}
            />
           <div>
            <Label className="gap-4"> Image of Item </Label>
              <Avatar className="md:w-24 md:h-24 self-center flex justify-center gap-4">
                <AvatarImage
                  src=""
                  className="md:w-32 md:h-32"
                  alt="@"
                />
                <AvatarFallback>Your Food</AvatarFallback>
              </Avatar>
              <div className="rounded-lg ">
                <Input id="picture" type="file" className="w-42 mt-2"    onChange={formik.handleChange}
              value={formik.values.image}/>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
            //   disabled={isDisabled}
              type="submit"
              onClick={() => formik.handleSubmit()}
            >
              Add Item
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </form>
  );
 }

