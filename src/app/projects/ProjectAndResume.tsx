"use client";

import React from "react";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { Button } from "@/components/ui/button";

export function EvervaultCardDemo() {
  return (
    <div className="flex justify-center text-center items-center min-h-screen p-8">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
        <div className="border border-black/[0.2] dark:border-white/[0.2]  dark:bg-zinc-800 flex flex-col items-start max-w-sm p-4 relative rounded-lg shadow-lg mx-auto">
          <EvervaultCard text="Resume" className="w-full" />

          <Button
            className="w-64 px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 "
            onClick={() => window.open("/images/lebenslauf.pdf", "_blank")}
          >
            View
          </Button>
        </div>

        <div className="border border-black/[0.2] dark:border-white/[0.2] dark:bg-zinc-800 flex flex-col items-start max-w-sm p-4 relative rounded-lg shadow-lg mx-auto">
          <EvervaultCard text="Motivation" className="w-full" />

          <Button
            className="w-64 px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 "
            onClick={() =>
              window.open("/images/Motivationsschreiben.pdf", "_blank")
            }
          >
            View
          </Button>
        </div>

        <div className="border border-black/[0.2] dark:border-white/[0.2] dark:bg-zinc-800 flex flex-col items-start max-w-sm p-4 relative rounded-lg shadow-lg mx-auto">
          <EvervaultCard text="Diplom" className="w-full" />

          <Button
            className="w-64 px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 "
            onClick={() => window.open("/images/diplom.pdf", "_blank")}
          >
            View
          </Button>
        </div>

        <div className="border border-black/[0.2] dark:border-white/[0.2] dark:bg-zinc-800 flex flex-col items-start max-w-sm p-4 relative rounded-lg shadow-lg mx-auto">
          <EvervaultCard text="Calculator" className="w-full" />

          <Button
            className="w-64 px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 "
            onClick={() =>
              window.open("https://calculator-rose-omega-65.vercel.app")
            }
          >
            View
          </Button>
        </div>

        <div className="border border-black/[0.2] dark:border-white/[0.2]  dark:bg-zinc-800 flex flex-col items-start max-w-sm p-4 relative rounded-lg shadow-lg mx-auto">
          <EvervaultCard text="Pokemon API" className="w-full" />

          <Button
            className="w-64 px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 "
            onClick={() => window.open("https://pokemonapi-kohl.vercel.app/")}
          >
            View
          </Button>
        </div>

        <div className="border border-black/[0.2] dark:border-white/[0.2]  dark:bg-zinc-800 flex flex-col items-start max-w-sm p-4 relative rounded-lg shadow-lg mx-auto">
          <EvervaultCard text="Finance Dashboard" className="w-full" />

          <Button
            className="w-64 px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 "
            onClick={() =>
              window.open("https://finance-app-nu-one.vercel.app/")
            }
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
}
