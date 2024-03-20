import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({ className }: any) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      <Link
        href="/addRestaurant"
        className="text-base font-semibold text-muted-foreground transition-colors hover:text-[#303068] text-[#272fab]"
      >
        Add Restaurant
      </Link>
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
    </nav>
  );
}
