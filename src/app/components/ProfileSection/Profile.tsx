"use client";
import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function ProfilePic() {
  return (
    <div className="p-10">
      <Image
        src="/images/MyEmoji.png"
        alt="profile"
        width={300}
        height={0}
        className="ml-10"
      />
      <div className="p-5">
        <p className="text-3xl">Abdulsamet Sevimli</p>
        <p className="text-xl">Web Developer</p>
      </div>
      <Button
        onClick={() => window.open("/images/diplom.pdf", "_blank")}
        className="mt-5 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-200"
      >
        View Resume
      </Button>
    </div>
  );
}
