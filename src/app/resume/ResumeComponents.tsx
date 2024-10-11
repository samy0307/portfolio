"use client";

import { Button } from "@/components/ui/button";

export default function ResumeComponents() {
  return (
    <div className="flex flex-col">
      <Button
        onClick={() => window.open("/images/lebenslauf.pdf", "_blank")}
        className="mt-5 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-200"
      >
        View Resume
      </Button>
      <Button
        onClick={() => window.open("/images/diplom.pdf", "_blank")}
        className="mt-5 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-200"
      >
        Motivation Letter
      </Button>
      <Button
        onClick={() => window.open("/images/diplom.pdf", "_blank")}
        className="mt-5 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-200"
      >
        Diplom
      </Button>
    </div>
  );
}
