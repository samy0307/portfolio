import Image from "next/image";

export default function TechStack() {
  return (
    <div className="p-10">
      <h1 className="text-3xl mb-4">My Tech Stack</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-16 p-2 rounded-xl justify-center items-center">
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
            src="/images/nextjs.png"
            alt="nextjs"
            width={50}
            height={50}
            className="mx-auto"
          />
        </div>
        <div className="text-center">
          <p className="p-2">Prisma ORM</p>
          <Image
            src="/images/prisma.png"
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
            src="/images/github.png"
            alt="github"
            width={50}
            height={50}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
