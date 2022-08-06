/** @format */

// Custom Components
import { motion } from "framer-motion";
import SingleContent from "../../components/article/SingleContent";
import SingleCover from "../../components/article/SingleCover";
import SingleHeader from "../../components/article/SingleHeader";
import SingleUpdateStatus from "../../components/article/SingleUpdateStatus";
import NavigationalArticles from "../../components/NavigationArticles";
import Layout from "../../views/shared/Layout/Layout";

const DATA_BLOG = [
	{
		slug: "jh",
		title: "You need to learn Kubernetes RIGHT NOW!! 🚀",
		excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`,
		url: "/articles/jh",
		meta: "PUBLISHED MARCH 21, 2021",
	},
	{
		slug: "jh",
		title: "20 Awesome Website You Didn't Know About",
		excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`,
		url: "/articles/jh",
		meta: "PUBLISHED MARCH 21, 2021",
	},
];
export default function ArticlesSingle() {
	const singleArticleHeader = {
		title: "How Gorgias uses Vouchers to lessen webinar fatigue",
		date: "Published March 21, 2021",
		cat: "Front-end Development",
	};
	const singleArticleCover = {
		url: "/images/singleCover.jpg",
		alt: "About banner Image",
		width: 1088,
		height: 370,
	};

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}>
				<Layout>
					<SingleHeader data={singleArticleHeader} />
					<SingleCover data={singleArticleCover} />
					<SingleContent />
					<SingleUpdateStatus />
					<NavigationalArticles articles={DATA_BLOG} />
				</Layout>
			</motion.div>
		</>
	);
}
