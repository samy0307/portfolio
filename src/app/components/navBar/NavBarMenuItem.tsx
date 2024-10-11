import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface NavMenuProps {
  title: string;
  href: Url;
  icon: IconProp;
}

export default function NavmenuItem(props: NavMenuProps) {
  return (
    <Link href={props.href} className="grid justify-items-center">
      <div>{props.title}</div>
      <div>
        <FontAwesomeIcon icon={props.icon} className="h-5" />
      </div>
    </Link>
  );
}
