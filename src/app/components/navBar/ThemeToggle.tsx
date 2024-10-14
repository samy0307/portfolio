"use client";

import * as React from "react";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col items-center">
      <span className=" ">{theme === "light" ? "Dark" : "Light"}</span>
      <Button
        variant="ghost"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-1"
      >
        {theme === "light" ? (
          <FontAwesomeIcon icon={faSun} className="h-5" />
        ) : (
          <FontAwesomeIcon icon={faMoon} className="h-5" />
        )}
      </Button>
    </div>
  );
}
