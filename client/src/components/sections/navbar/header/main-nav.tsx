import Link from "next/link";

import { cn } from "@/lib/utils";
import { useContext } from "react";
import { UserContext } from "@/context/UserProvider";
import FavoriteDrawer from "../../favorite/favoriteDrawer";

export function MainNav({ className }: any) {
  const { loggedUser } = useContext(UserContext);

  return (
    <nav
      className={cn(
        "sm:flex items-center space-x-4  sm:space-x-3 md:space-x-4 lg:space-x-6 text-center sm:text-left",
        className
      )}
    >
      <Link
        href="/"
        className="text-primary font-semibold transition-colors hover:scale-105  xs:text-xs sm:text-sm md:text-md lg:text-lg"
      >
        Home
      </Link>
      <Link
        href={`${loggedUser ? "/explore" : "/login"}`}
        className="text-primary font-semibold transition-colors hover:scale-105  xs:text-xs sm:text-sm md:text-md lg:text-lg"
      >
        Explore
      </Link>
      <Link
        href={`${loggedUser ? "/admin/addrestaurant" : ""}`}
        className="text-primary font-semibold transition-colors hover:scale-105  ml-2 xs:text-xs sm:text-sm md:text-md lg:text-lg"
      >
        Add Restaurant
      </Link>
      <div className="drawer-content  ">
        <label
          htmlFor="my-drawer-4"
          className="  text-primary font-semibold transition-colors xs:text-xs sm:text-sm md:text-md lg:text-lg"
        >
          Favorites
        </label>
        <FavoriteDrawer />
      </div>

      {loggedUser?._id === "" ? (
        <div className="space-x-4 lg:space-x-6">
          <Link
            href="/login"
            className="text-primary font-semibold transition-colors hover:scale-105 "
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="text-primary font-semibold transition-colors hover:scale-105 "
          >
            Sign Up
          </Link>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}
