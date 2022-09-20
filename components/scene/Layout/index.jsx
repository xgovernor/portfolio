import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Footer from "../../../views/shared/Footer/Footer";
import Navigation from "../../components/Navigation";

const Layout = ({ className, children, ...rest }) => {
	return (
		<>
			{/* Main Navigation */}
			<Navigation />

			{/* Page Body */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: "opacity 1s ease" }}
				exit={{ opacity: 0, transition: "opacity 1s ease" }}>
				<main
					className={className ? `p_page ${className}` : `p_page`}
					{...rest}>
					{children}
				</main>
			</motion.div>

			{/* Footer */}
			<Footer />
		</>
	);
};

Layout.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	rest: PropTypes.object,
};

export default Layout;
