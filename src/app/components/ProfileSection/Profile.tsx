import Image from "next/image";

export default function ProfilePic() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-10 flex flex-col items-center">
        <Image
          src="/images/MyEmoji.png"
          alt="profile"
          width={300}
          height={300}
          className=""
        />
        <div className="p-5 text-center">
          <p className="text-4xl">Abdulsamet Sevimli</p>
          <p className="text-xl mt-8">Junior Web Developer</p>
        </div>
      </div>
    </div>
  );
}
