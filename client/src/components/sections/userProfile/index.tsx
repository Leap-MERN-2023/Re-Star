"use client";
import {Button} from "@/components/ui/button"
import { BiEditAlt } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useContext } from "react";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { toast } from "@/components/ui/use-toast";
import { FormSchema } from "@/schema";
import { useState } from "react";
import { UserContext } from "@/context/UserProvider";

export const UserProf = () => {
  return (
    <>
      <div title="Profile Settings" className="  flex justify-center  ">
        <div className="grid  md:grid-rows-1 gap-6 w-[500px] mt-10 border-spacing-2 bg- border border-purple-300 p-8 rounded-xl">
          <div className="flex justify-center ">
            <div>
              <Avatar className="md:w-52 md:h-52 self-center flex justify-center">
                <AvatarImage
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBeHdW37yqnZFBs4Rrg4F38OJJr0Jlh53Bpw&usqp=CAU"
                  className="md:w-52 md:h-52"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="rounded-lg ">
                <div> id="picture" type="file" className="w-60" </div>
              </div>
            </div>
          </div>
       <div></div>
              <Button
              >
                Edit Profile
              </Button>
      
        </div>
      </div>
    </>
  );
  };
