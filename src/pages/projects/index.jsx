import { groq } from "next-sanity";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/Layout";
import IMG from "../../assets/images/work.webp";
import { getClient } from "../../utils/sanity";
import PageBanner from "../../components/PageBanner";
import WorkProjects from "../../components/WorkProjects";

// Import 'info' from your meta.constant.js to access default values
import { info } from "./../../components/Meta/meta.constant";

// GROQ query for projects.
// IMPORTANT: Ensure this query fetches all fields needed for the JSON-LD snippet
// (title, projectName, excerpt, thumbnail, slug)
const QUERY = groq`*[_type == "project"] {
  _id,
  featured,
  projectName,
  thumbnail,
  title,
  excerpt,
  "slug": slug.current,
  // Add other fields here if you want to include them in the ItemList, e.g., githubUrl, technology
  // githubUrl,
  // technology,
  }`;

function Work({ data }) {
  // Define meta information specific to the /projects page
  const projectsPageMeta = {
    pageTitle:
      "Projects | Abu Taher Muhammad - Full-Stack Web Developer Portfolio",
    pageDescription:
      "Explore a diverse portfolio of web development projects by Abu Taher Muhammad, showcasing expertise in React.js, Node.js, and modern full-stack solutions.",
    pageImage: `${info.website}/images/projects-page-banner.jpg`,
    pageUrl: `${info.website}/projects`,
    projectsData: data?.projects, // <--- NEW: Pass the projects data here
  };

  return (
    <>
      <Layout
        className="page__work"
        meta={projectsPageMeta} // Pass the full meta object
      >
        <PageHeader
          heading="PROJECTS"
          subheading={[
            "FORGING EXPERIENCES",
            "WHERE CREATIVITY",
            "EMBRACES TECHNOLOGY.",
          ]}
        />
        <PageBanner img={IMG} />

        <WorkProjects projects={data?.projects} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const projects = await getClient(preview).fetch(QUERY);

  return {
    props: {
      data: { projects },
    },
    revalidate: 60 * 60 * 6, // Revalidate every 6 hours
  };
}

export default Work;
