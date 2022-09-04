// Core Components
// Custom Components
import PageBanner from "../../components/PageBanner";
import PageHeader from "../../components/PageHeader";
import AboutBody from "../../views/pages/about/AboutBody";
import Layout from "../../views/shared/Layout/Layout";

export default function About() {
	const dataImg = {
		url: "/images/about.jpg",
		alt: "About banner Image",
		width: 1444,
		height: 579,
	};

	return (
		<>
			<Layout data={{ class: "p_page_about" }}>
				<PageHeader
					data={{
						heading: "FAMILY & FRIENDS, ACHIEVEMENTS, ETC.",
						subheading: ["Journey.", "Purification.", "Rewards reimagined."],
					}}
				/>
				<PageBanner dataImg={dataImg} />
				{/* <AboutQuote /> */}
				<AboutBody />
			</Layout>
		</>
	);
}
