import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { memo } from "react";
import Footer from "../../../views/shared/Footer/Footer";
import Navigation from "../../components/Navigation";
import clsx from "clsx";

const Layout = ({ className, children, ...rest }) => (
  <>
    <Navigation />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: "opacity 1s ease" }}
      exit={{ opacity: 0, transition: "opacity 1s ease" }}
    >
      <main className={clsx('p_page', className)} {...rest}>
        {children}
      </main>
    </motion.div>
    <Footer />
  </>
);

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default memo(Layout);
