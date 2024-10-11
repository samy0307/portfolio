import ProfilePic from "./components/ProfileSection/Profile";
import SocialMediaSection from "./components/ProfileSection/SocialMediaSection";

export default function Home() {
  return (
    <div className="grid grid-rows items-center justify-items-center p-5 text-center gap-6">
      <ProfilePic />
      <div className="p-5">
        <SocialMediaSection />
      </div>
    </div>
  );
}
