"use client"
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Navigation from "../Navigation";
const Footer = dynamic(() => import("../Footer"));

function Layout({ children, ...rest }) {
  return (
    <>
    <Navigation />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: "opacity 1s ease" }}
      exit={{ opacity: 0, transition: "opacity 1s ease" }}
    >
      <main {...rest}>
        {children}
      </main>
    </motion.div>
    <Footer />
    </>
  );
};

export default Layout;
