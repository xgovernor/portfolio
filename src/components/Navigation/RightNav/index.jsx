import { useEffect, useState, memo } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { navigationRoutes } from "../../../assets/data/routes";

function NavMenu() {
  return (
    <>
      <ul className="max-md:hidden flex justify-end items-center gap-6 lg:gap-9 ">
        {navigationRoutes &&
          navigationRoutes.map((link) => (
            <li
              className="font-primary font-bold text-[#000c19] uppercase hover:opacity-70 md:max-lg:text-sm "
              key={link._id}
            >
              <span>
                <Link
                  href={link.url}
                  style={{
                    color: "inherit",
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

function RightNav() {
  const [isVisible, setIsVisible] = useState(false);
  const handleMenu = () => setIsVisible(!isVisible);

  useEffect(() => {
    if (isVisible) document.body.style.overflow = "hidden";
    if (!isVisible) document.body.style.overflowY = "scroll";
  }, [isVisible]);

  return (
    <>
      <div className="flex items-center gap-[30px]">
        <NavMenu />
        {/* <ThemeChanger /> */}

        <button className="h-[22px] text-[15px] font-bold md:hidden" onClick={handleMenu}>
          {isVisible ? (
            <p>CLOSE</p>
          ) : (
            <svg
              width="26"
              height="19"
              viewBox="0 0 26 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="25.5"
                y1="1"
                x2="5.63462e-06"
                y2="0.999998"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="25.5"
                y1="9.5"
                x2="7.72727"
                y2="9.5"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="25.5"
                y1="18"
                x2="5.63462e-06"
                y2="18"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          )}
        </button>

        {isVisible && <MobileMenu />}
      </div>
    </>
  );
}

export default memo(RightNav);
