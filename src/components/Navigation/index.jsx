import { useEffect, useState, memo, useCallback } from "react";
import { navigationRoutes } from "./../../assets/data/routes";
import Container from "../Container";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  const scroll = useCallback(() => {
    let scrollTop = window.scrollY;

    scrollTop > 75 ? setScrolled(true) : setScrolled(false);
  }, []);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      scroll();
    });
  }, [scroll]);

  return (
    <>
      <header className="py-[25px] h-[75px]">
        <nav
          className={`flex justify-center items-center ${scrolled ? "p_fixed" : "p_not_fixed"}`}
        >
          <Container className="flex justify-between items-center">
            {/* Brand */}
            <LeftNav />

            {/* Menu */}
            <RightNav links={navigationRoutes} />
          </Container>
        </nav>
      </header>
    </>
  );
}

export default memo(Navigation);
