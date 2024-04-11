"use client";

import React from "react";
import { useContext } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { IoMdCloudUpload } from "@/components/icons";
import myAxios from "@/utils/myAxios";
import { MdRestaurantMenu } from "react-icons/md";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useFormik } from "formik";
import { toast } from "react-toastify";
import { UserContext } from "@/context/UserProvider";
import { MenuContext } from "@/context/MenuProvider";

// import { MenuContext } from "@/context/MenuProvider";

export function MenuModal({ id }: { id: string }) {
  const { getMenuByOrgId } = useContext(MenuContext);
  const { token } = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      description: "",
      price: "",
      image: "",
    },
    onSubmit: ({ name, category, description, price, image }) => {
      addMenuItem({ name, category, description, price, image });
    },
  });

  const addMenuItem = async ({
    name,
    category,
    description,
    price,
    image,
  }: any) => {
    try {
      const dataForm = new FormData();
      dataForm.set("name", name);
      dataForm.set("category", category);
      dataForm.set("description", description);
      dataForm.set("price", price);
      dataForm.set("image", image);
      dataForm.set("orgId", id);

      const data = await myAxios.post("/menu", dataForm, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getMenuByOrgId(id);

<<<<<<< HEAD
      toast.success("Successful");
=======
      toast.success("New review added");
>>>>>>> 70c8d72 (edit)
    } catch (error) {
      toast.error("Error");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-secondary text-primary   hover:bg-secondary hover:scale-105 transform transition-all hover:cursor-pointers">
          Add Menu Item
          <MdRestaurantMenu size={"25px"} style={{ margin: 4 }} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add menu </DialogTitle>
          <DialogDescription>
            Add a new menu item to your restaurant
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className=" flex flex-col items-start gap-4 justify-start">
            <Label htmlFor="NameFood" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              className="w-full bg-secondary placeholder:text-primary"
              name="name"
              placeholder="Name of Item."
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <Label htmlFor="description" className="text-primary">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
              placeholder="Write here..."
              className="bg-secondary placeholder:text-primary"
            />
            <Select
              onValueChange={(e) => formik.setFieldValue("category", e)}
              value={formik.values.category}
            >
              <SelectTrigger className=" bg-secondary">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  <SelectItem value="Drink">Drink</SelectItem>
                  <SelectItem value="Main Course">Main Course</SelectItem>
                  <SelectItem value="Dessert">Dessert</SelectItem>
                  <SelectItem value="Alcohol">Alcohol</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Label htmlFor="price" className="text-primary">
              Price
            </Label>
            <Input
              id="price"
              className=" bg-secondary placeholder:text-primary"
              placeholder="Price of item..."
              onChange={formik.handleChange}
              value={formik.values.price}
            />
            <div>
              <Label className="gap-4"> Image of Item </Label>
              {/* <div> */}
              {/* <div className=" text-center flex flex-col justify-center"> */}
              <div className="flex justify-center w-full">
                <Button className="bg-secondary text-primary hover:bg-black ">
                  <input
                    type="file"
                    onChange={(event) => {
                      const selectedFile =
                        event.target.files && event.target.files[0];
                      formik.setFieldValue("image", selectedFile);
                    }}
                  />
                </Button>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        {/* </div> */}
        <DialogFooter>
          <DialogClose>
            <Button
              type="submit"
              onClick={() => formik.handleSubmit()}
              className="bg-secondary  hover:bg-black hover:scale-105 transform transition-all hover:cursor-pointers text-primary"
            >
              Add Item
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
