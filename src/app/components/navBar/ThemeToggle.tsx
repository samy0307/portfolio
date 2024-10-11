"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-4">
      <Button
        variant="ghost"
        className="p-2"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <>
            <span className="ml-2">Dark Mode</span>
            <Sun className="h-5 w-5" />
          </>
        ) : (
          <>
            <span className="ml-2">Light Mode</span>
            <Moon className="h-5 w-5" />
          </>
        )}
      </Button>
    </div>
  );
}
