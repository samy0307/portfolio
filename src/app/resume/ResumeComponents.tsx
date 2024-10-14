"use client";

import { Button } from "@/components/ui/button";

export default function ResumeComponents() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-4">
        <Button
          onClick={() => window.open("/images/lebenslauf.pdf", "_blank")}
          className="w-64 px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition duration-300 ease-in-out"
        >
          View Resume
        </Button>
        <Button
          onClick={() => window.open("/images/motivation.pdf", "_blank")}
          className="w-64 px-6 py-3 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-800 transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Motivation Letter
        </Button>
        <Button
          onClick={() => window.open("/images/diplom.pdf", "_blank")}
          className="w-64 px-6 py-3 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-purple-800 transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Diplom
        </Button>
      </div>
    </div>
  );
}
