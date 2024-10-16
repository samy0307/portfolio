import { faAddressCard, faUser } from "@fortawesome/free-regular-svg-icons";
import NavmenuItem from "./NavBarMenuItem";
import { faHouse, faRocket } from "@fortawesome/free-solid-svg-icons";
import { ModeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="p-2 flex justify-center gap-12">
      <div className=" py-2  transition-transform transform duration-200 hover:scale-105 hover:translate-y-[-2px]">
        <NavmenuItem title="Home" href="/" icon={faHouse} />
      </div>
      <div className=" py-2  transition-transform transform duration-200 hover:scale-105 hover:translate-y-[-2px]">
        <NavmenuItem title="About" href="/about" icon={faUser} />
      </div>

      <div className="py-2  transition-transform transform duration-200 hover:scale-105 hover:translate-y-[-2px]">
        <NavmenuItem title="Work" href="/projects " icon={faRocket} />
      </div>
      <div className=" py-2 transition-transform transform duration-200 hover:scale-105 hover:translate-y-[-2px]">
        <NavmenuItem title="Contact" href="/contact" icon={faAddressCard} />
      </div>
      <div className=" py-2 transition-transform transform duration-200 hover:scale-105 hover:translate-y-[-2px]">
        <ModeToggle />
      </div>
    </div>
  );
}
