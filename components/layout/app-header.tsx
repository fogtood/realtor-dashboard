import { Bell } from "lucide-react";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

import { SearchForm } from "@/components/common/search-form";
import ProfileDropdown from "@/components/common/profile-dropdown";

export default function AppHeader() {
  return (
    <header className="flex h-16 items-center justify-between gap-20 px-2 md:px-5 bg-sidebar w-full">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="[&>svg]:!size-6 md:hidden text-secondary" />
        <SearchForm />
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="cursor-pointer !size-10 text-secondary hover:bg-background relative rounded-full"
        >
          <Bell className="size-5" />
          <span className="size-2 bg-red-500 rounded-full absolute top-3 right-3" />
        </Button>
        <ProfileDropdown />
      </div>
    </header>
  );
}
