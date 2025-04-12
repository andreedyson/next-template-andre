"use client";

import { LANDING_PAGE_LINKS } from "@/constants";
import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

function LandingHeader() {
  const pathname = usePathname();
  return (
    <header className="bg-background z-[99] hidden items-center justify-between border p-6 shadow-md max-md:px-4 md:flex md:px-[80px] lg:px-[144px]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md">
          <GalleryVerticalEnd className="size-4" />
        </div>
        StartDash
      </Link>

      {/* Landing Page Links */}
      <div className="flex items-center gap-6 text-sm lg:text-base">
        {LANDING_PAGE_LINKS.map((link) => (
          <Link
            key={link.title}
            href={link.url}
            className={`${pathname === link.url ? "text-slate-600" : ""} font-medium duration-200 hover:underline`}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-4 text-sm font-medium lg:text-base">
          <Link
            href={"/sign-in"}
            className="duration-200 hover:text-slate-800 hover:underline"
          >
            Sign In
          </Link>
          <Link href={"/register"}>
            <Button className="font-medium">Register</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default LandingHeader;
