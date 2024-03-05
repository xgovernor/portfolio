import Link from "next/link";
import Container from "../../Container";
// import S from "./MobileMenu.module.sass";
// import { motion } from "framer-motion";
import { memo } from "react";

const MENU = [
  {
    title: "HOME",
    slug: "/",
  },
  {
    title: "ABOUT",
    slug: "/about",
  },
  {
    title: "WORK",
    slug: "/work",
  },
  {
    title: "BLOG",
    slug: "/article",
  },
];

function MobileMenu(state) {
  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: "opacity 1s ease" }}
        exit={{ opacity: 0, transition: "opacity 1s ease" }}
      > */}
      <div
        className={
          state
            ? "fixed top-[75px] right-0 left-0 bottom-0 block bg-[#f6f6f6] z-50"
            : "hidden overflow-hidden"
        }
      >
        <Container className="w-full h-full py-20 px-5 gap-5 flex flex-col justify-start items-center">
          {MENU.map((e, i) => (
            <Link
              key={i}
              href={`/${e.slug}`}
              className="text-black [font-family:'NHaasGroteskDSPro'] text-4xl font-bold"
            >
              {e.title}
            </Link>
          ))}
        </Container>
      </div>
      {/* </motion.div> */}
    </>
  );
}

export default memo(MobileMenu);
