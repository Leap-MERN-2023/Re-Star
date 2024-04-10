"use client";
import { Button } from "@/components/ui/button";
import { BiEditAlt } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useContext } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { GoOrganization } from "react-icons/go";
import { FaGripLinesVertical } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "@/components/icons";

export const UserProfile = () => {
  return (
    <div
      title="Profile Settings"
      className="  flex justify-center bg-secondary "
    >
      <div className="grid md:grid-rows-1 gap-6 w-[600px] border-spacing-2 border border-primary rounded-xl mt-[150px]">
        <div className="flex justify-center flex-col  ">
          <div className="flex flex-row bg-secondary w-full rounded-sm p-4">
            <div className="flex flex-col ">
              <div className="self-center flex justify-center p-4 font-bold text-2xl">
                User Name
              </div>
              <div className="flex self-center">I am a reviewer :8</div>
              <Link className="flex self-center font-bold mt-4" href={""}>
                Website.mn <FaLink className="flex self-center ml-2" />
              </Link>
              <Link className="flex self-center" href={"/profile"}>
                <Button className="h-8 w-24  flex self-center mt-6">
                  Edit Profile
                </Button>
              </Link>
            </div>
            <Avatar className="md:w-52 md:h-52 self-center flex justify-center ml-6">
              <AvatarImage
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBeHdW37yqnZFBs4Rrg4F38OJJr0Jlh53Bpw&usqp=CAU"
                className="md:w-52 md:h-52"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="rounded-lg ">
              <div> </div>
            </div>
          </div>
          <div className="flex flex-col grid-cols-3">
            <div className="flex flex-row justify-between p-6 px-8">
              <div className="flex flex-row self-center font-bold">
                Reviews <CiStar className="flex self-center ml-1" />
              </div>
              <div className="flex flex-row self-center font-bold">
                Favorites
                <CiHeart className="flex self-center ml-1" />
              </div>
              <div className="flex flex-row self-center font-bold">
                Organizations
                <GoOrganization className="flex self-center ml-1" />
              </div>
            </div>
            <div className="flex flex-row justify-between p-6 mx-2 pl-8 ">
              <div className="flex flex-row self-center">196</div>
              <FaGripLinesVertical className="flex self-center ml-4" />
              <div className="flex flex-row self-center">210</div>
              <FaGripLinesVertical className="flex self-center ml-4" />
              <div className="flex flex-row self-center mr-9">2</div>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
          <div className="m-10 font-extralight flex justify-center border rounded-sm border-slate-300 p-4">
            I am a reviewer with a passion for food Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </div>
        </div>
      </div>
    </div>
  );
};
