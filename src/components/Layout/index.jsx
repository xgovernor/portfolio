"use client"
import { motion } from "framer-motion";
import Footer from "../Footer";
import Navigation from "../Navigation";

const Layout = ({ children, ...rest }) => (
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

export default Layout;
