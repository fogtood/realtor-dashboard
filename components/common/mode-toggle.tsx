"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <Button
      variant="ghost"
      className="flex items-center justify-start gap-3 w-full bg-transparent text-sm font-semibold hover:!bg-transparent hover:!text-[#475BE8] cursor-pointer"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Sun className="group-hover:text-[#475BE8] size-4.5" />
      ) : (
        <Moon className="group-hover:text-[#475BE8] size-4.5" />
      )}
      {isDark ? "Light Mode" : "Dark Mode"}
    </Button>
  );
}
