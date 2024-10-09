import ProfilePic from "./components/ProfileSection/Profile";
import SocialMediaSection from "./components/ProfileSection/SocialMediaSection";

export default function Home() {
  return (
    <div className="grid grid-rows items-center justify-items-center p-5">
      <div className="p-5">
        <ProfilePic />
      </div>

      <div className="text-center p-5">
        <p className="text-3xl">Abdulsamet Sevimli</p>
        <p className="text-xl">Web Developer</p>
      </div>
      <div className="p-5">
        <SocialMediaSection />
      </div>
    </div>
  );
}
