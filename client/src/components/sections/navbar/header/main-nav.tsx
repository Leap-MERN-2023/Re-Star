import Link from "next/link";

import { cn } from "@/lib/utils";
import { useContext } from "react";
import { UserContext } from "@/context/UserProvider";

export function MainNav({ className }: any) {
  const { loggedUser } = useContext(UserContext);

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      <Link
        href={`${loggedUser ? "/explore" : "/login"}`}
        className="text-base font-semibold text-muted-foreground transition-colors hover:text-[#303068] text-[#272fab]"
      >
        Explore
      </Link>
      <Link
        href={`${loggedUser ? "/favorites" : "/login"}`}
        className="text-base font-semibold text-muted-foreground transition-colors hover:text-[#303068] text-[#272fab]"
      >
        Favorites
      </Link>
      <Link
        href={`${loggedUser ? "/admin/addrestaurant" : ""}`}
        className="text-base font-semibold text-muted-foreground transition-colors hover:text-[#303068] text-[#272fab]"
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
