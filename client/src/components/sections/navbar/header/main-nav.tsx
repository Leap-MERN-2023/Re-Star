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
      <div className="drawer-content  ">
        <label
          htmlFor="my-drawer-4"
          className="text-primary font-semibold transition-colors max-[460px]:text-transparent max-[460px]:text-xs "
        >
          Favorites
        </label>
        <FavoriteDrawer />
      </div>

      {loggedUser?._id === "" ? (
        <div className="space-x-4 lg:space-x-6">
          <Link
            href="/login"
            className="text-primary font-semibold transition-colors hover:scale-120  max-[460px]:text-transparent max-[460px]:text-xs  "
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="text-primary font-semibold transition-colors hover:scale-120  max-[460px]:text-transparent max-[460px]:text-xs  "
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
