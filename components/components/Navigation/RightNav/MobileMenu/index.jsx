import Link from "next/link";
import Container from "../../../Container";
import S from "./MobileMenu.module.sass";
// import { motion } from "framer-motion";
import { memo } from "react";

const MENU = [
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
  {
    title: "CONTACT",
    slug: "/contact",
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
      <div className={state ? S.__menuOView : S.__menuCView}>
        <Container className={S.__menu}>
          {MENU.map((e, i) => (
            <Link key={i} href={`/${e.slug}`} className={S.__menuItem}>
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
