"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import Image from "next/image";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
      >
        My Tech Stack
      </motion.h1>
      <div className="p-2 ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-16 p-2 justify-center items-center">
          <div className="text-center">
            <p className="p-2">JavaScript</p>
            <Image
              src="/images/js.png"
              alt="javascript"
              width={50}
              height={50}
              className="mx-auto"
            />
          </div>
          <div className="text-center">
            <p className="p-2">TypeScript</p>
            <Image
              src="/images/ts.png"
              alt="typescript"
              width={50}
              height={50}
              className="mx-auto"
            />
          </div>
          <div className="text-center">
            <p className="p-2">React</p>
            <Image
              src="/images/react.png"
              alt="react"
              width={50}
              height={50}
              className="mx-auto"
            />
          </div>
          <div className="text-center">
            <p className="p-2">Next.JS</p>
            <Image
              src="/images/nextjswhite.png"
              alt="nextjs"
              width={50}
              height={50}
              className="mx-auto"
            />
          </div>
          <div className="text-center">
            <p className="p-2">Prisma ORM</p>
            <Image
              src="/images/prismawhite.png"
              alt="prisma"
              width={50}
              height={50}
              className="mx-auto"
            />
          </div>
          <div className="text-center">
            <p className="p-2">Docker</p>
            <Image
              src="/images/docker.png"
              alt="docker"
              width={50}
              height={50}
              className="mx-auto"
            />
          </div>
          <div className="text-center">
            <p className="p-2">Tailwind</p>
            <Image
              src="/images/tail.png"
              alt="tailwind"
              width={50}
              height={50}
              className="mx-auto"
            />
          </div>
          <div className="text-center">
            <p className="p-2">GitHub</p>
            <Image
              src="/images/githubwhite.png"
              alt="github"
              width={50}
              height={50}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </LampContainer>
  );
}
