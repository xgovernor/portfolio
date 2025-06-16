import { groq } from "next-sanity";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/Layout";
import IMG from "../../assets/images/work.webp";
import { getClient, imageBuilder } from "../../utils/sanity";
import PageBanner from "../../components/PageBanner";
import WorkProjects from "../../components/WorkProjects";
import { info } from "./../../components/Meta/meta.constant";

// GROQ query for projects.
// IMPORTANT: Ensure this query fetches all fields needed for the JSON-LD snippet
// (title, projectName, excerpt, thumbnail, slug)
const QUERY = groq`*[_type == "project"] {
  _id,
  featured,
  name,
  thumbnail,
  title,
  excerpt,
  "slug": slug.current,
  // Add other fields here if you want to include them in the ItemList, e.g., githubUrl, technology
  // githubUrl,
  // technology,
  }`;

function Work({ data }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage", // Most appropriate for an index of articles/case studies
    name: "Web Development Projects & Case Studies by Abu Taher Muhammad", // More descriptive name for search
    description:
      "Explore a diverse portfolio of web development project case studies by Abu Taher Muhammad. Discover detailed insights into challenges, solutions, technologies used, and outcomes for React.js, Node.js, and full-stack solutions.",
    url: `${info.website}/projects`,
    image: {
      "@type": "ImageObject",
      url: `${info.website}/images/projects-page-banner.jpg`, // Ensure this URL is accessible
      caption: "Banner image showcasing various web development projects",
      // Add dimensions for better image understanding by search engines
      width: 1200,
      height: 630,
    },
    mainEntity: {
      // Using mainEntity to explicitly state the primary content is an ItemList
      "@type": "ItemList",
      itemListElement: data?.projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article", // Each item in the list is an Article (case study)
          headline: project.projectName, // The main title of the case study
          url: `${info.website}/projects/${project.slug}`,
          description: project.excerpt,
          image: {
            "@type": "ImageObject",
            url: imageBuilder(project.thumbnail).width(800).height(450).url(),
            caption: `Thumbnail for ${project.projectName} project case study`,
            width: 800,
            height: 450,
          },
          author: {
            // Author of the individual case study
            "@type": "Person",
            name: info.author,
            url: info.website, // Link to your personal 'about' or home page
          },
          datePublished: project.datePublished, // Required for Article, format: YYYY-MM-DD
          dateModified: project.dateModified || project.datePublished, // If applicable
          // Optionally, link to the full article page's WebPage entity
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${info.website}/projects/${project.slug}`,
          },
          // Add more relevant properties that might exist in your project data
          // For example, if you track the industry/domain of the project:
          // articleSection: "Web Development",
          // keywords: project.tags ? project.tags.join(', ') : null,
        },
      })),
      numberOfItems: data?.projects.length,
    },
    // Global author for the entire projects page (optional, but good for context)
    author: {
      "@type": "Person",
      name: info.author,
      url: info.website,
    },
    // Publisher information for the overall site (good for branding in search)
    publisher: {
      "@type": "Organization", // Or 'Person' if you operate solely as an individual brand
      name: info.websiteName || info.author, // Your website's name or your name
      url: info.website,
      logo: {
        "@type": "ImageObject",
        url: `${info.website}/images/your-logo.png`, // Path to your website's main logo
        width: 600, // Recommended max width
        height: 60, // Recommended max height
      },
    },
    // Add more properties that describe the collection page itself
    // breadcrumb: { /* ... BreadcrumbList schema if applicable ... */ },
    // inLanguage: "en-US", // Specify language
    // hasPart: [ /* list of individual project URLs if not using ItemList as mainEntity */ ]
  };

  return (
    <>
      <Layout
        className="page__work"
        meta={{
          children: (
            <script
              id="structured-data-projects-index-page"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
              }}
            />
          ),
        }} // Pass the full meta object
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
