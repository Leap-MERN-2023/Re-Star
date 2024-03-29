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
import { ReviewContext } from "@/context/ReviewProvider";
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
    const [category, setCategory] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
 
  const handleChange = (e: any) => setCategory(e.target.value);
  const [isDisabled, setIsDisabled] = useState(true);
//   const { addMenu, isOpen } = useContext(MenuContext);
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

  return (
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
          <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-center"
        >
          {value
            ? categories.find((categories) => categories.value === value)?.label
            : "Select Category"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No category found.</CommandEmpty>
          <CommandGroup>
            {categories.map((categories) => (
              <CommandItem
                key={categories.value}
                value={categories.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                  
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === categories.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {categories.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
          </div>
          <div className=" flex flex-col items-start gap-4 justify-start">
            <Label htmlFor="NameFood" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              className="w-64"
              placeholder="Name of Item."
              onChange={(e) => handleChange(e)}
            />
    <Label htmlFor="Description" className="text-right">
              Description
            </Label>
            <Textarea       onChange={(e) => handleChange(e)} /> 
            <Label htmlFor="Price" className="text-right">
              Price
            </Label>
            <Input
              id="Price"
              className="w-64"
              placeholder="Price of Item."
              onChange={(e) => handleChange(e)}
            />
           <div>
            <Label className="gap-4"> Image of Item </Label>
              <Avatar className="md:w-32 md:h-32 self-center flex justify-center gap-4">
                <AvatarImage
                  src=""
                  className="md:w-32 md:h-32"
                  alt="@"
                  onChange={(e) => handleChange(e)}
                />
                <AvatarFallback>Your Food</AvatarFallback>
              </Avatar>
              <div className="rounded-lg ">
                <Input id="picture" type="file" className="w-42 mt-2" />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              disabled={isDisabled}
              type="submit"
            //   onClick={() => addMenu(category, name, image, description, price)}
            >
              Add Item
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
 }

