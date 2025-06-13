import { groq } from "next-sanity";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/Layout";
import IMG from "../../assets/images/work.webp";
import { getClient } from "../../utils/sanity";
import PageBanner from "../../components/PageBanner";
import WorkProjects from "../../components/WorkProjects";

// Import 'info' from your meta.constant.js to access default values
import { info } from "./../../components/Meta/meta.constant";

// GROQ query for featured Projects & Articles.
// (No change needed here, as it fetches data for WorkProjects, not for the meta tags of this page itself)
const QUERY = groq`*[_type == "project"] {
  _id,
  featured,
  projectName,
  thumbnail,
  title,
  excerpt,
  "slug": slug.current,
  }`;

function Work({ data }) {
  // Define meta information specific to the /projects page
  const projectsPageMeta = {
    pageTitle:
      "Projects | Abu Taher Muhammad - Full-Stack Web Developer Portfolio",
    pageDescription:
      "Explore a diverse portfolio of web development projects by Abu Taher Muhammad, showcasing expertise in React.js, Node.js, and modern full-stack solutions.",
    // Use a specific image for the projects page if you have one, otherwise fall back to your general avatar
    pageImage: `${info.website}/images/projects-page-banner.jpg`, // Assuming you might have a specific banner or header image for the projects page
    pageUrl: `${info.website}/projects`, // Explicitly set the canonical URL for the projects page
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
