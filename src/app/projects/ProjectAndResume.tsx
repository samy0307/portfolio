import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

export function EvervaultCardDemo() {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] bg-white dark:bg-zinc-800 flex flex-col items-start max-w-sm mx-auto p-6 relative rounded-lg shadow-lg">
      {/* Icons in den Ecken */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      {/* Evervault Card */}
      <EvervaultCard text="hover" className="w-full" />

      {/* Beschreibungstext */}
      <h2 className="dark:text-white text-black mt-6 text-lg font-semibold">
        Hover over this card to reveal an awesome effect
      </h2>

      {/* Zusätzlicher Text */}
      <p className="text-sm font-light dark:text-gray-300 text-gray-700 mt-2">
        Running out of copy here. This is just a demo of a hover effect card.
      </p>

      {/* Hover Button */}
      <button className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-zinc-700">
        Watch me hover
      </button>
    </div>
  );
}
