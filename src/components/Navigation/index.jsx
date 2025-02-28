"use client"
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
              className="font-sans font-bold  text-black md:text-base lg:text-lg xl:text-xl"
              href={"/"}
            >
              Abu Taher Muhammad
            </Link>

            {/* Menu */}
            <RightNav />
          </Container>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
