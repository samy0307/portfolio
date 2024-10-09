import {
  faAddressCard,
  faFileLines,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import NavmenuItem from "./NavBarMenuItem";
import { faHouse, faRocket } from "@fortawesome/free-solid-svg-icons";
import { ModeToggle } from "./ThemeToggle";

export default function NavbarCenter() {
  return (
    <div className="p-5 flex justify-center gap-16">
      <div className="px-4 py-2 rounded transition-transform transform duration-200 hover:scale-105 hover:translate-y-[-2px]">
        <NavmenuItem title="Home" href="/" icon={faHouse} />
      </div>
      <div className="px-4 py-2 rounded transition-transform transform duration-200 hover:scale-105 hover:translate-y-[-2px]">
        <NavmenuItem title="About" href="/about" icon={faUser} />
      </div>
      <div className="px-4 py-2 rounded transition-transform transform duration-200 hover:scale-105 hover:translate-y-[-2px]">
        <NavmenuItem title="Resume" href="/resume" icon={faFileLines} />
      </div>
      <div className="px-4 py-2 rounded transition-transform transform duration-200 hover:scale-105 hover:translate-y-[-2px]">
        <NavmenuItem title="Projects" href="/projects" icon={faRocket} />
      </div>
      <div className="px-4 py-2 rounded transition-transform transform duration-200 hover:scale-105 hover:translate-y-[-2px]">
        <NavmenuItem title="Contact" href="/contact" icon={faAddressCard} />
      </div>
      <div className="px-4 py-2 rounded transition-transform transform duration-200 hover:scale-105 hover:translate-y-[-2px]">
        <ModeToggle />
      </div>
    </div>
  );
}
