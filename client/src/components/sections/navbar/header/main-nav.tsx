import Link from "next/link";

import { cn } from "@/lib/utils";
import { useContext } from "react";
import { UserContext } from "@/context/UserProvider";
import FavoriteDrawer from "../../favorite/favoriteDrawer";

export function MainNav({ className }: any) {
  const { loggedUser } = useContext(UserContext);

  return (
    <nav className={cn("sm:flex items-center space-x-4  sm:text-center sm:space-x-3 md:space-x-4 lg:space-x-6 text-center sm:text-left", className)}>
      <Link
        href="/"
        className="text-base font-semibold text-muted-foreground transition-colors hover:text-[#303068] text-[#272fab] xs:text-xs sm:text-sm md:text-md lg:text-lg"
      >
        Home
      </Link>
      <Link
        href={`${loggedUser ? "/explore" : "/login"}`}
        className="text-base font-semibold text-muted-foreground transition-colors hover:text-[#303068] text-[#272fab] xs:text-xs sm:text-sm md:text-md lg:text-lg"
      >
        Explore
      </Link>
      {/* <Link
        id="my-drawer-4"
        href={`${loggedUser ? "" : ""}`}
        className="text-base font-semibold text-muted-foreground transition-colors hover:text-[#303068] text-[#272fab] drawer-content"
      >
        Favorites
      </Link> */}

      <div className="drawer-content">
        <label
          htmlFor="my-drawer-4"
          className="  text-base font-semibold text-muted-foreground transition-colors hover:text-[#303068] text-[#272fab] xs:text-xs sm:text-sm md:text-md lg:text-lg"
        >
          Favorites
        </label>
        <FavoriteDrawer />
      </div>

      <Link
        href={`${loggedUser ? "/admin/addrestaurant" : ""}`}
        className="text-base font-semibold text-muted-foreground transition-colors hover:text-[#303068] text-[#272fab] ml-2 xs:text-xs sm:text-sm md:text-md lg:text-lg"
      >
        Add Restaurant
      </Link>

      {loggedUser?._id === "" ? (
        <div className="space-x-4 lg:space-x-6">
          <Link
            href="/login"
            className="text-base font-semibold text-muted-foreground transition-colors hover:text-[#303068] text-[#272fab]"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="text-base font-semibold text-muted-foreground transition-colors hover:text-[#303068] text-[#272fab]"
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
