// Custom Components
import { motion } from "framer-motion";
import Container from "../components/Container";

export default function SingleHeader({ data }) {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}>
				<section className="p_single_header">
					<Container>
						<p className="p_meta_cat">{data?.cat}</p>
						<h1 className="p__title">{data?.title}</h1>
						<p className="p_meta_date">{data.date}</p>
					</Container>
				</section>
			</motion.div>
		</>
	);
}
