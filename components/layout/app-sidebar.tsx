"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import logo from "@/assets/images/logo.png";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Properties",
    url: "/properties",
    icon: Inbox,
  },
  {
    title: "Agents",
    url: "/agents",
    icon: Calendar,
  },
  {
    title: "Reviews",
    url: "/reviews",
    icon: Search,
  },
  {
    title: "Messages",
    url: "/messages",
    icon: Settings,
  },
  {
    title: "My Profile",
    url: "/profile",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const isActive = (url: string) =>
    pathname === url || pathname.startsWith(url);

  return (
    <Sidebar className="!border-r-0">
      <SidebarContent className="px-3 py-3.75">
        <SidebarGroup className="p-0 gap-10">
          <SidebarGroupLabel className="font-bold text-2xl text-secondary">
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              className="inline-block mr-2"
            />
            Yariga
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    className="data-active:!bg-[#475BE8] gap-2.5 font-bold [&>svg]:size-6 !text-primary data-active:!text-white py-4 text-base rounded-xl h-auto px-5.75"
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
