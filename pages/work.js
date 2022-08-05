// Core Components
// Custom Components
import PageBanner from "../components/PageBanner";
import PageHeader from "../components/PageHeader";
import Layout from "../views/shared/Layout/Layout";

export default function Work() {
	const dataImg = {
		url: "/images/work.jpg",
		alt: "About banner Image",
		width: 1444,
		height: 579,
	};

	return (
		<>
			<Layout>
				<PageHeader
					data={{
						heading: "WORKS",
						subheading: [
							"Craft. Experiences",
							"where creativity",
							"meets technology.",
						],
					}}
				/>
				<PageBanner dataImg={dataImg} />

				<h1>Coming Soon</h1>
			</Layout>
		</>
	);
}
