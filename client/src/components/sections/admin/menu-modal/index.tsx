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
import { MdOutlineInsertPhoto, IoMdCloudUpload } from "@/components/icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import myAxios from "@/utils/myAxios";
import { Textarea } from "@/components/ui/textarea";
import { useContext, useEffect, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { MdRestaurantMenu } from "react-icons/md";
import React from "react";
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

// import { MenuContext } from "@/context/MenuProvider";

export function MenuModal({ id }: { id: string }) {
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
      console.log(
        "name",
        name,
        "category",
        category,
        "desc,",
        description,
        "price",
        price,
        "img",
        image,
        "orgId",
        id
      );
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
      console.log("star");
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

      // useEffect(() => {
      //     if (value=== null) {
      //       setIsDisabled(true);
      //     } else {
      //       setIsDisabled(false);
      //     }
      //   }, [value]);
      toast.success("Shine review amjilltai uuslee");
    } catch (error) {
      toast.error("Алдаа");
    }
  };
  return (
    // <form onSubmit={formik.handleSubmit}>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="w-full">
          <MdRestaurantMenu
            color="#858484"
            size={"25px"}
            style={{ margin: 4 }}
          />
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
          <div className="grid grid-cols-4 items-center gap-4"></div>
          <div className=" flex flex-col items-start gap-4 justify-start">
            <Label htmlFor="NameFood" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              className="w-64"
              name="name"
              placeholder="Name of Item."
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            <Select
              onValueChange={(e) => formik.setFieldValue("category", e)}
              value={formik.values.category}
            >
              <SelectTrigger className="w-[250px]">
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
              <div>
                <div className="size-40 text-center flex flex-col justify-center">
                  <div className="mx-[10%]">
                    <IoMdCloudUpload className="lg:size-52" color="purple" />
                  </div>
                </div>
              </div>
              <Button variant={"outline"} className="bg-slate-500">
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
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => formik.handleSubmit()}>
            Add Item
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    // </form>
  );
}
