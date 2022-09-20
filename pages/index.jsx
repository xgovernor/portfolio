import { groq } from "next-sanity";
import { useRouter } from "next/router";
import Layout from "../components/scene/Layout";
import { getClient } from "../lib/sanity.server";
import HomeAbout from "../views/pages/home/HomeAbout";
import HomeArticles from "../views/pages/home/HomeArticles";
import HomeHero from "../views/pages/home/HomeHero";
import HomeProjects from "../views/pages/home/HomeProjects";

// GROQ query for featured Projects & Articles.
const QUERY = groq`*[(_type == "project" || _type == "article") && featured == true] {
	_id,
	_type,
	"date": {
	  _createdAt,
	  publishedAt,
	  _updatedAt
	},
	featured,
	"category": category[0] -> {
	  _id,
	  title
	},
	thumbnail,
	title,
	excerpt,
	liveUrl,
	role,
	"slug": slug.current,
	technology,
  }`;

export default function HomePage({ data, preview }) {
	const router = useRouter();

	// if (!router.isFallback && !data.post?.slug) {
	// 	return <ErrorPage statusCode={200} />;
	// }

	console.log("DATA: ", data);

	const pageData = {
		title: "Abu Taher Muhammad",
		class: "p_page_home",
	};
	const dataImg = {
		url: "/images/index.jpg",
		alt: "About banner Image",
		width: 1444,
		height: 579,
	};

	return (
		<>
			<Layout data={pageData}>
				<HomeHero
					title={["Designer, developer", "and freethinker."]}
					cvURL={
						"https://drive.google.com/file/d/1osz9wNueb0Ac9gGXk1QQgRwlu5UnKN6B/view?usp=sharing"
					}
				/>
				<HomeAbout />
				<HomeProjects projects={data?.projects} />
				<HomeArticles articles={data?.articles} />
			</Layout>
		</>
	);
}

export async function getStaticProps({ params, preview = false }) {
	/**
	 * Getting 3 featured project & 2 featured articles.
	 */
	const response = await getClient(preview).fetch(QUERY);
	const projects = await response.filter((data) => data._type === "project");
	const articles = await response.filter((data) => data._type === "article");

	return {
		props: {
			preview,
			data: { projects, articles },
		},
		revalidate: 86400,
	};
}
