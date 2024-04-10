import { Button } from "@/components/ui/button";
import {
  Dialog,
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
}

export function EditOrgMenu({
  name,
  category,
  description,
  price,
  _id,
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

        const data = await myAxios.post("/menu", dataForm, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        getMenuByOrgId(orgId);

        toast.success("Shine review amjilltai uuslee");
      } catch (error: any) {
        toast.error("Алдаа");
        console.log("errr", error);
      }
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          size={"icon"}
          className="flex justify-center items-center m-3"
        >
          <MdModeEdit className="w-10 h-10 text-green-600 " />
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
          <Button
            type="submit"
            className="w-full"
            onClick={() => formik.handleSubmit()}
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
