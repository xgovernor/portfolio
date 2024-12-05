import { useEffect, useState, memo, useCallback } from "react";
import { navigationRoutes } from "./../../assets/data/routes";
import Container from "../Container";
import RightNav from "./RightNav";
import Link from "next/link";

function Navigation() {

  return (
    <>
      <header className="py-[25px] h-[75px]">
        <nav
          className={`flex justify-center items-center`}
        >
          <Container className="flex justify-between items-center">
            <Link
              className="font-primary font-bold uppercase text-black md:text-base lg:text-lg xl:text-xl"
              href={"/"}
            >
              A.T. Muhammad
            </Link>

            {/* Menu */}
            <RightNav links={navigationRoutes} />
          </Container>
        </nav>
      </header>
    </>
  );
}

export default memo(Navigation);
