import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

export default function Layout({ data, children }) {
	return (
		<>
			{/* Main Navigation */}
			<Navigation />

			{/* Page Body */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: "opacity 1s ease" }}
				exit={{ opacity: 0, transition: "opacity 1s ease" }}>
				<main className={data?.class ? `${data.class}` : ``}>{children}</main>
			</motion.div>

			{/* Footer */}
			<Footer />
		</>
	);
}
