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
              className="font-primary text-black  text-4xl font-bold"
            >
              {e.title}
            </Link>
          ))}
        </Container>
      </div>
    </>
  );
}

export default memo(MobileMenu);
