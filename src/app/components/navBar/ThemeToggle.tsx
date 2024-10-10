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
          <Sun className="h-10 w-10" />
        ) : (
          <Moon className="h-10 w-10" />
        )}
      </Button>
    </div>
  );
}
