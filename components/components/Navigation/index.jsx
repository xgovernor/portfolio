// Core Components
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationRoutes } from "../../../routes/navigation.routes";
import Container from "../Container";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      scroll();
    });
  }, []);

  const scroll = () => {
    let scrollTop = window.scrollY;

    scrollTop > 75 ? setScrolled(true) : setScrolled(false);
  };

  return (
    <>
      <header>
        <nav
          //   className={`p_navigation_bar ${scrolled ? "p_fixed" : "p_not_fixed"}`}
          className={`p_navigation_bar ${scrolled ? "p_fixed" : "p_not_fixed"}`}
        >
          {/**
           * Initial Navigation
           *
           * This Navigation gets visible when someone visit a page and did not scrolled yet.
           */}

          <Container className="container">
            {/* Brand */}
            <LeftNav />

            {/* Menu */}
            <RightNav links={navigationRoutes} />
          </Container>
        </nav>
      </header>

      <style jsx>{`
        header {
          padding-top: 25px;
          padding-bottom: 25px;
          height: 75px;
        }
        .p_c__container {
          background: red;
        }
      `}</style>
    </>
  );
};

export default Navigation;
