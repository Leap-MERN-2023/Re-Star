"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/UserProvider";
import FavoriteDrawer from "../../favorite/favoriteDrawer";

export function MainNav({ className }: any) {
  const { loggedUser } = useContext(UserContext);
  // useEffect(() => {
  //   if (loggedUser._id === "") {
  //   } else {
  //     location.reload();
  //     console.log("RELOADED");
  //   }
  // }, []);

  console.log("loggedUser", loggedUser);

  return (
    <nav
      className={cn(
        "flex items-center space-x-4 text-center  max-[460px]:gap-0 max-[460px]:space-x-0",
        className
      )}
    >
      <Link
        href="/"
        className="text-primary font-semibold transition-colors hover:scale-105 max-[460px]:text-transparent max-[460px]:text-xs "
      >
        Home
      </Link>
      <Link
        href={`${loggedUser ? "/explore" : "/login"}`}
        className="text-primary font-semibold transition-colors hover:scale-105 max-[460px]:text-transparent max-[460px]:text-xs "
      >
        Explore
      </Link>
      <Link
        href={`${loggedUser ? "/admin/addrestaurant" : ""}`}
        className="text-primary font-semibold transition-colors hover:scale-105  max-[460px]:text-transparent  max-[460px]:text-xs "
      >
        Add Restaurant
      </Link>
      <div className="drawer-content  text-primary font-semibold transition-colors hover:scale-105 max-[460px]:text-transparent max-[460px]:text-xs ">
        <label
          htmlFor="my-drawer-4"
          className="text-primary font-semibold transition-colors max-[460px]:text-transparent max-[460px]:text-xs "
        >
          Favorites
        </label>
        <FavoriteDrawer />
      </div>

      {!loggedUser._id ? (
        <div className="space-x-4 lg:space-x-6">
          <Link
            href="/login"
            className="text-primary font-semibold transition-colors hover:scale-105 max-[460px]:text-transparent max-[460px]:text-xs "
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="text-primary font-semibold transition-colors hover:scale-105 max-[460px]:text-transparent max-[460px]:text-xs "
          >
            Sign Up
          </Link>
        </div>
      ) : (
        <Link
          className="text-primary font-semibold transition-colors hover:scale-105 max-[460px]:text-transparent max-[460px]:text-xs "
          href="/admin"
        >
          <div className="hover:scale-120">Go to your Restaurant</div>
        </Link>
      )}
    </nav>
  );
}
