"use client";

import React, { useContext, useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useFormik } from "formik";
import * as Yup from "yup";
import { CategoryContext } from "@/context/CategoryProvider";

const AddCategory = () => {
  const { addCategory } = useContext(CategoryContext);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Category name is required")
      .max(16, "Category name must not be more than 16 characters"),
    description: Yup.string().required("Decription is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      image: File,
    },
    validationSchema,
    onSubmit({ name, description, image }) {
      const dataForm = new FormData();
      dataForm.set("name", name);
      dataForm.set("description", description);
      dataForm.set("image", image as any);
      addCategory(dataForm);
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-[120px] bg-primary text-secondary">
          Add Category Here
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
          <DialogDescription>
            Add category here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4  gap-4 justify-center">
            <Label htmlFor="name" className="text-right mt-[15px]">
              Name
            </Label>
            <div className="w-[270px]">
              <Input
                id="name"
                placeholder="Category name"
                className=""
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.submitCount > 0 && formik.errors.name && (
                <p className="text-[10px] justify-end flex text-red-700">
                  {formik.errors.name}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-4  gap-4 justify-center">
            <Label htmlFor="username" className="text-right mt-[15px]">
              Description
            </Label>
            <div className="w-[270px]">
              <Input
                id="description"
                placeholder="Write description"
                className=""
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              {formik.submitCount > 0 && formik.errors.description && (
                <p className="text-[10px] justify-end flex text-red-700">
                  {formik.errors.description}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-4  gap-4 justify-center">
            <Label htmlFor="username" className="text-right mt-[15px]">
              Image
            </Label>
            <div className="w-[270px]">
              <Input
                id="image"
                className="col-span-3 items-center justify-start"
                name="image"
                type="file"
                onChange={(e) => {
                  const file = e.target.files && e.target.files[0];
                  formik.setFieldValue("image", file);
                }}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => formik.handleSubmit()}
            className="w-full"
          >
            Add Category
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategory;
