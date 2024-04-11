import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdModeEdit } from "@/components/icons";
import { IMenu } from "@/interface";
import { useFormik } from "formik";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContext } from "react";
import { CategoryContext } from "@/context/CategoryProvider";
import { toast } from "react-toastify";
import { UserContext } from "@/context/UserProvider";
import myAxios from "@/utils/myAxios";
import { MenuContext } from "@/context/MenuProvider";

interface IOrmMenuProps extends IMenu {
  orgId: string;
  menuId: string;
}

export function EditOrgMenu({
  name,
  category,
  description,
  price,
  menuId,
  orgId,
}: IOrmMenuProps) {
  const { categories } = useContext(CategoryContext);
  const { token } = useContext(UserContext);
  const { getMenuByOrgId } = useContext(MenuContext);

  const formik = useFormik({
    initialValues: {
      name,
      category,
      description,
      price,
    },

    onSubmit: async ({ name, category, description, price }) => {
      try {
        const dataForm = new FormData();
        dataForm.set("name", name);
        dataForm.set("category", category);
        dataForm.set("description", description);
        dataForm.set("price", price);
        dataForm.set("orgId", orgId);
        dataForm.set("menuId", menuId);
        console.log("first", name, category, description, price, orgId);
        console.log("second", dataForm.get("orgId"));

        const data = await myAxios.post("/menu/update", dataForm, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        getMenuByOrgId(orgId);

<<<<<<< HEAD:client/src/components/sections/admin/editOrgMenu/index.tsx
        toast.success("Successful");
=======
        toast.success("New review edited");
>>>>>>> 70c8d72 (edit):client/src/components/sections/admin/editOrg/index.tsx
      } catch (error: any) {
        toast.error(`error : ${error.response && error.response.data.message}`);
      }
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex justify-center items-center w-full text-[#17BA09] bg-white">
          {/* <MdModeEdit className="w-10 h-10 text-green-600 " /> */}
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Menu</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <Label htmlFor="name" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              className="col-span-3"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            <Label htmlFor="name" className="text-right">
              Price
            </Label>
            <Input
              id="price"
              className="col-span-3"
              value={formik.values.price}
              onChange={formik.handleChange}
            />
            <Label className="text-right">Category</Label>
            <Select value={formik.values.category}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  {categories.map((category, i) => (
                    <SelectItem key={i} value={category._id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button
              type="submit"
              className="w-full"
              onClick={() => formik.handleSubmit()}
            >
              Save Changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
