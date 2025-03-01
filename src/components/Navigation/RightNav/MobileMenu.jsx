import Link from "next/link";
import Container from "../../Container";
import { memo } from "react";
import { NAVBAR_ROUTES } from "../../../assets/data/links";


function MobileMenu(state) {
  return (
    <>
      <div
        className={
          state
            ? "fixed top-[75px] right-0 left-0 bottom-0 block bg-[#f6f6f6] z-50 md:hidden"
            : "hidden overflow-hidden"
        }
      >
        <Container className="w-full h-full py-20 px-5 gap-5 flex flex-col justify-start items-center">
          {NAVBAR_ROUTES.map((e, i) => (
            <Link
              key={i}
              href={`/${e.url}`}
              className="font-sans text-black  text-4xl font-bold"
            >
              {e.title}
            </Link>
          ))}

          <Link
              href="#contact"
              className="font-medium font-serif rounded-full text-sm px-5 py-2.5 me-2 mb-2 border-[#B2B5B7] border text-[#000c19] hover:text-[#313131]"
              download
              target="_blank"
            >
              DOWNLOAD CV
            </Link>

        </Container>
      </div>
    </>
  );
}

export default memo(MobileMenu);
