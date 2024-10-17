"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import {
  faCalendarDays,
  faEnvelopeOpenText,
  faLocationDot,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 md:p-6 gap-10">
      <div className="col-span-1 flex justify-center">
        <BackgroundGradient className="rounded-[22px] p-1 bg-white dark:bg-zinc-900">
          <Image
            src="/images/ProfilePic.jpg"
            alt="profile"
            width={400}
            height={400}
            className="rounded-xl object-cover max-w-xs md:max-w-md"
          />
        </BackgroundGradient>
      </div>

      <div className="col-span-1 md:col-span-2 py-5 md:py-12">
        <h2 className="text-xl mb-2">Who am I?</h2>
        <p className="mb-6">
          I am a junior web developer passionate about creating intuitive and
          user-friendly web applications. With expertise in JavaScript,
          TypeScript, React, and Next.js. After completing a software
          development bootcamp, I have honed my skills in building full-stack
          applications, utilizing tools like Prisma for efficient backend
          solutions. I am committed to enhancing user experiences through
          innovative features and solutions. In my spare time, I explore new
          technologies to broaden my knowledge and improve my craft. I believe
          in the power of collaboration and knowledge sharing to tackle complex
          challenges.
        </p>

        <div className="space-y-8">
          <h2 className="text-xl mb-2">Personal Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            <div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faMobileScreenButton} className="h-7" />
                <div>
                  <p className="text-xs">Phone</p>
                  <p>+4369911036322</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelopeOpenText} className="h-7" />
                <div>
                  <p className="text-xs">Email</p>
                  <p>samet.sevimli07@gmail.com</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faLocationDot} className="h-7" />
                <div>
                  <p className="text-xs">Location</p>
                  <p>Höchst, Austria</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faCalendarDays} className="h-7" />
                <div>
                  <p className="text-xs">Birthday</p>
                  <p>10.09.1986</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
