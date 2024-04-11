import React, { useContext } from "react";

import { RestaurantContext } from "@/context/RestaurantProvider";
import { useRouter } from "next/navigation";
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

import { useFormik } from "formik";

import * as yup from "yup";

const RestaurantCard = () => {
  const { org, changeOrgStatus } = useContext(RestaurantContext);

  const statuses = ["pending", "approved", "banned"];

  const formik = useFormik({
    initialValues: {
      status: "",
      orgId: "",
    },
    validationSchema: {
      status: yup.string().required(),
      orgId: yup.string().required(),
    },

    onSubmit: ({ status, orgId }) => {
      changeOrgStatus(orgId, status);
    },
  });
  console.log("org", org);

  return (
    <div className="flex flex-wrap justify-around gap-10 mt-[100px]">
      {statuses.map((status, i) => (
        <div className="w-full  overflow-clip " key={i}>
          <div className="text-2xl font-bold text-primary">
            {status.toUpperCase()}
          </div>
          {org
            .filter((stat) => {
              return stat.role === status;
            })
            .map((e, i) => (
              <Dialog key={i}>
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
                      Check restaurant here. Click save when you are done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4 ">
                    <div className="grid grid-cols-4  gap-4  items-center">
                      <Label htmlFor="name">Name:</Label>
                      <div className="w-[400px]">{e.name}</div>
                    </div>
                    <div className="grid grid-cols-4  gap-4 justify-center items-center">
                      <Label htmlFor="username">Address:</Label>
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
                        {e.images.map((img, i) => (
                          <img
                            src={img}
                            key={i}
                            alt=""
                            className="h-[250px] "
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <DialogFooter className="gap-2">
                    {e.role.toLowerCase() === "pending" && (
                      <>
                        <Button
                          type="submit"
                          className="w-full bg-[#61b23f] text-white"
                          onClick={() => changeOrgStatus(e?._id, "approved")}
                        >
                          Add Restaurant
                        </Button>
                        <Button
                          type="submit"
                          className="w-full bg-[#a83c3c] text-white"
                          onClick={() => changeOrgStatus(e?._id, "banned")}
                        >
                          Decline Restaurant
                        </Button>
                      </>
                    )}
                    {e.role.toLowerCase() === "banned" && (
                      <>
                        <Button
                          type="submit"
                          className=" bg-[#61b23f] text-white"
                          onClick={() => changeOrgStatus(e?._id, "approved")}
                        >
                          Approve Restaurant
                        </Button>
                      </>
                    )}
                    {e.role.toLocaleLowerCase() === "approved" && (
                      <Button
                        type="submit"
                        className=" bg-[#a83c3c] text-white"
                        onClick={() => changeOrgStatus(e?._id, "banned")}
                      >
                        Ban Restaurant
                      </Button>
                    )}
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ))}
        </div>
      ))}
    </div>
  );
};

export default RestaurantCard;
