"use client";

import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User2, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className="inline-flex items-center gap-2.5 cursor-pointer md:w-[200px] md:max-w-full">
          <Avatar className="size-10">
            <AvatarImage src="/images/avatar.png" />
            <AvatarFallback className="text-secondary bg-background">
              HM
            </AvatarFallback>
          </Avatar>
          <div className="text-sm hidden md:block">
            <h3 className="text-secondary font-semibold whitespace-nowrap">
              Hawkins Maru
            </h3>
            <p className="text-primary whitespace-nowrap">Company Manager</p>
          </div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="w-[200px] max-w-full mt-3.5 rounded-lg border-none bg-sidebar text-primary p-2.5 shadow-none"
      >
        {/* Menu Items */}
        <div className="flex flex-col">
          <DropdownMenuItem
            asChild
            className="group hover:!text-[#475BE8] cursor-pointer !bg-transparent p-2.5 text-sm font-semibold"
          >
            <Link href="/profile" className="flex items-center gap-3">
              <User2 className="group-hover:text-[#475BE8] size-4.5" />
              Edit Profile
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem
            asChild
            className="group hover:!text-[#475BE8] cursor-pointer !bg-transparent p-2.5 text-sm font-semibold"
          >
            <Link href="/settings" className="flex items-center gap-3">
              <Settings className="group-hover:text-[#475BE8] size-4.5" />
              Settings
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem
            asChild
            className="group hover:!text-[#475BE8] cursor-pointer !bg-transparent p-2.5 text-sm font-semibold"
          >
            <Button
              variant="ghost"
              className="flex items-center justify-start gap-3 hover:!border-0"
            >
              <LogOut className="group-hover:text-[#475BE8] size-4.5" />
              Logout
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem
            asChild
            className="group hover:!text-[#475BE8] cursor-pointer !bg-transparent p-2.5 text-sm font-semibold"
          >
            <ModeToggle />
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
