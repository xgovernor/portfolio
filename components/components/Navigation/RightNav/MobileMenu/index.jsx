import Link from "next/link";
import Container from "../../../Container";
import S from "./MobileMenu.module.sass";
import { motion } from "framer-motion";

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

const MobileMenu = (state) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: "opacity 1s ease" }}
        exit={{ opacity: 0, transition: "opacity 1s ease" }}
      >
        <div className={state ? S.__menuOView : S.__menuCView}>
          <Container className={S.__menu}>
            {MENU.map((e, i) => (
              <Link key={i} href={`/${e.slug}`}>
                <a className={S.__menuItem}>{e.title}</a>
              </Link>
            ))}
          </Container>
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu;
