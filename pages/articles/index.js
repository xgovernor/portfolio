// Custom Components
import { motion } from "framer-motion";
import BlogGrid from "../../components/BlogGrid";
import PageBanner from "../../components/PageBanner";
import PageHeader from "../../components/PageHeader";
import Layout from "../../views/shared/Layout/Layout";

export default function Blog() {
	const dataImg = {
		url: "/images/blog_banner.jpg",
		// url: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		alt: "About banner Image",
		width: 1444,
		height: 579,
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<Layout>
				<PageHeader
					data={{
						heading: "KNOWLEDGE BOOK",
						subheading: [
							// "Occasional thoughts and insights from Muhammad's everyday life.",
							"Occasional",
							"thoughts & insights.",
							"from Muhammad's life.",
						],
					}}
				/>
				<PageBanner dataImg={dataImg} />
				<BlogGrid />
			</Layout>
		</motion.div>
	);
}
