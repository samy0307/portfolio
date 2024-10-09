import Image from "next/image";

export default function ProfilePic() {
  return (
    <div>
      <Image src="/images/MyEmoji.png" alt="profile" width={300} height={300} />
    </div>
  );
}
