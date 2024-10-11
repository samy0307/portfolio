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
    </div>
  );
}
