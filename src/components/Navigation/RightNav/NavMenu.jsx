import Link from "next/link";
import { memo } from "react";
import { navigationRoutes } from "../../../assets/data/routes";

function NavMenu() {
  return (
    <>
      <ul className="max-md:hidden flex justify-end items-center gap-6 lg:gap-9 ">
        {navigationRoutes &&
          navigationRoutes.map((link) => (
            <li
              className="opacity-70 hover:opacity-100 md:max-lg:text-sm text-black font-medium [font-family:'Neue_Haas_Grotesk_Display_Pro'] uppercase"
              key={link._id}
            >
              <span>
                <Link
                  href={link.url}
                  style={{
                    color: "inherit",
                    font: "inherit",
                    textDecoration: "inherit",
                  }}
                >
                  {link.title}
                </Link>
              </span>
            </li>
          ))}
      </ul>
    </>
  );
}

export default memo(NavMenu);
