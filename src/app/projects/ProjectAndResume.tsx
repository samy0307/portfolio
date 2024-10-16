"use client";

import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { Button } from "@/components/ui/button";

export function EvervaultCardDemo() {
  return (
    <div className="flex justify-center p-14 text-center">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
        <div className="border border-black/[0.2] dark:border-white/[0.2] bg-white dark:bg-zinc-800 flex flex-col items-start max-w-sm p-4 relative rounded-lg shadow-lg mx-auto">
          <EvervaultCard text="Resume" className="w-full" />

          <Button
            className=" mt-8 w-64 px-6 py-3 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-purple-800 transform hover:scale-105 transition duration-300 ease-in-out"
            onClick={() => window.open("/images/lebenslauf.pdf", "_blank")}
          >
            View Resume
          </Button>
        </div>

        <div className="border border-black/[0.2] dark:border-white/[0.2] bg-white dark:bg-zinc-800 flex flex-col items-start max-w-sm p-6 relative rounded-lg shadow-lg">
          <EvervaultCard text="Motivation Letter" className="w-full" />

          <Button
            className="w-64 px-6 py-3 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-purple-800 transform hover:scale-105 transition duration-300 ease-in-out"
            onClick={() => window.open("/images/motivation.pdf", "_blank")}
          >
            View
          </Button>
        </div>

        <div className="border border-black/[0.2] dark:border-white/[0.2] bg-white dark:bg-zinc-800 flex flex-col items-start max-w-sm p-6 relative rounded-lg shadow-lg">
          <EvervaultCard text="Diplom" className="w-full" />

          <Button
            className="w-64 px-6 py-3 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-purple-800 transform hover:scale-105 transition duration-300 ease-in-out"
            onClick={() => window.open("/images/diplom.pdf", "_blank")}
          >
            View Project
          </Button>
        </div>

        <div className="border border-black/[0.2] dark:border-white/[0.2] bg-white dark:bg-zinc-800 flex flex-col items-start max-w-sm p-6 relative rounded-lg shadow-lg">
          <EvervaultCard text="Project 1" className="w-full" />
          <h2 className="dark:text-white text-black p-4  font-semibold">
            A Calculator in Apple Design
          </h2>
          <Button
            className="w-64 px-6 py-3 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-purple-800 transform hover:scale-105 transition duration-300 ease-in-out"
            onClick={() =>
              window.open("https://calculator-rose-omega-65.vercel.app")
            }
          >
            View Project
          </Button>
        </div>

        <div className="border border-black/[0.2] dark:border-white/[0.2] bg-white dark:bg-zinc-800 flex flex-col items-start max-w-sm p-6 relative rounded-lg shadow-lg">
          <EvervaultCard text="Project 2" className="w-full" />
          <h2 className="dark:text-white text-black p-4 text-lg font-semibold">
            App that uses a Pokemon API to find Pokemon by name.
          </h2>
          <Button
            className="w-64 px-6 py-3 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-purple-800 transform hover:scale-105 transition duration-300 ease-in-out"
            onClick={() => window.open("https://pokemonapi-kohl.vercel.app/")}
          >
            View Project
          </Button>
        </div>

        <div className="border border-black/[0.2] dark:border-white/[0.2] bg-white dark:bg-zinc-800 flex flex-col items-start max-w-sm p-6 relative rounded-lg shadow-lg">
          <EvervaultCard text="Project 3" className="w-full" />
          <h2 className="dark:text-white text-black p-4 text-lg font-semibold">
            App that tracks your Financial Transactions
          </h2>
          <Button
            className="w-64 px-6 py-3 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-purple-800 transform hover:scale-105 transition duration-300 ease-in-out"
            onClick={() => window.open("/images/project5.pdf", "_blank")}
          >
            View Project
          </Button>
        </div>
      </div>
    </div>
  );
}
