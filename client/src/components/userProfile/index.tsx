import { Input } from "../ui/input";

import { Button } from "../ui/button";
import { BiEditAlt } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function ProfileSettings() {
  return (
    <>
      <div title="Profile Settings" className="  flex justify-center  ">
        <div className="grid  md:grid-cols-1 gap-6 w-1/3 mt-10 border-spacing-2  border border-purple-300 p-8 rounded-xl">
          <div className="flex justify-center ">
            <Avatar className="md:w-52 md:h-52">
              <AvatarImage
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBeHdW37yqnZFBs4Rrg4F38OJJr0Jlh53Bpw&usqp=CAU"
                className="md:w-52 md:h-52"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex">
            <Input aria-label="Name" defaultValue="Alex" />{" "}
            <BiEditAlt className="mr-2 h-10 w-10 text-purple-500 " />
          </div>
          <div className="flex">
            <Input aria-label="Email Id" defaultValue="alex@dashwind.com" />
            <BiEditAlt className="mr-2 h-10 w-10 text-purple-500" />
          </div>
          <div className="flex">
            <Input aria-label="Place" defaultValue="California" />
            <BiEditAlt className="mr-2 h-10 w-10 text-purple-500" />
          </div>
          <div className="my-10 align-center w-full flex">
            <Button className="btn btn-primary w-full float-right text-purple-500">
              Update
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSettings;
