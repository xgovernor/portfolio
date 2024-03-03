import { groq } from "next-sanity";
import { Suspense, memo } from "react";
import Layout from "../components/Layout";
import HomeHero from "../components/home/HomeHero";
import dynamic from "next/dynamic";
import Meta from "../components/Meta";
import { getClient } from "../utils/sanity";
import HomeAbout from "../components/home/HomeAbout";
import HomeProjects from "../components/home/HomeProjects";
import HomeArticles from "../components/home/HomeArticles";

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

const pageData = {
  title: "Abu Taher Muhammad",
  class: "p_page_home",
};

function HomePage({ data = { projects: [], articles: [] }, preview }) {
  return (
    <>
      <Meta />

      <Layout data={pageData}>
        <HomeHero
          title={["Designer, developer", "and freethinker."]}
          cvURL={
            "https://drive.google.com/file/d/1osz9wNueb0Ac9gGXk1QQgRwlu5UnKN6B/view?usp=sharing"
          }
        />
        <HomeAbout />

        <HomeProjects
          title="FEATURED PROJECTS"
          description="Projects in which Muhammad has been involved in recent years."
          projects={data?.projects}
        />

        <HomeArticles articles={data?.articles} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
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
    revalidate: 60 * 60 * 24 * 7,
  };
}

export default memo(HomePage);
