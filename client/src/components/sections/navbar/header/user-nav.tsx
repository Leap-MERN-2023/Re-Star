"use client";

import { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserContext } from "@/context/UserProvider";
import { useRouter } from "next/navigation";

export function UserNav() {
  const { logout, loggedUser } = useContext(UserContext);
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {loggedUser._id ? (
          <Button
            variant="ghost"
            className="relative h-10 w-10 rounded-md border-2 hover:bg-secondary border-primary p-4 bg-secondary hover:scale-105 max-[460px]:text-xs max-[460px]:justify-center "
          >
            <Avatar className="h-8 w-8 border-primary">
              <AvatarImage src="/avatars/01.png" alt="@shadcn" />
              <AvatarFallback className="bg-secondary hover:bg-secondary">
                {loggedUser.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </Button>
        ) : (
          ""
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 bg-secondary border-primary border-2"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-lg font-medium leading-none text-center">
              {loggedUser.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground text-center">
              {loggedUser.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push("/userProfile")}>
            Profile
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
