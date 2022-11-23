import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import NavMenu from "./NavMenu";
import ThemeChanger from "./ThemeChanger";

const RightNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleMenu = () => setIsVisible(!isVisible);

  useEffect(() => {
    if (isVisible) document.body.style.overflow = "hidden";
    if (!isVisible) document.body.style.overflowY = "scroll";
  }, [isVisible]);

  return (
    <>
      <div className="p_navMenu">
        <NavMenu />
        {/* <ThemeChanger /> */}

        <button className="p_menu_tag" onClick={handleMenu}>
          {isVisible ? (
            "CLOSE"
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

      <style jsx>{`
        .p_navMenu {
          display: flex;
          align-items: center;
          gap: 30px;
        }
        .p_menu_tag {
          height: 22px;
          font-size: 15px;
          font-weight: 700;
        }
        @media (min-width: 758px) {
          .p_menu_tag {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default RightNav;
