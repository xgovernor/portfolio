import Layout from "../../../components/Layout";
import ProjectHeader from "../../../components/ProjectHeader";
import ProjectInfo from "../../../components/ProjectInfo";
import ProjectContent from "../../../components/ProjectContent";
import { groq } from "next-sanity";
import { getClient, imageBuilder } from "../../../utils/sanity";

// Import 'info' from your meta.constant.js for base URLs
import { info } from "./../../../components/Meta/meta.constant.js";

// **IMPORTANT:** Add 'slug.current' to the query so you can pass it to Meta component
const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug] | order(_updatedAt desc)[0]
{
  _id,
  thumbnail,
  projectName, // Using projectName for title if 'title' is not present in Sanity
  title,       // Assuming 'title' field might be used for project page title
  liveUrl,
  excerpt,     // Use this for meta description
  body,
  role,
  technology,
  "slug": slug.current, // Add slug to the fetched data for URL construction,
  githubUrl, // <--- ADD THIS if you have a GitHub URL field
  _updatedAt, // <--- ADD THIS if you want to use dateModified
  _createdAt, // <--- ADD THIS if you want to use dateCreated
}`;

function Project({ project }) {
  // Guard against missing project data before rendering
  if (!project) {
    // This case should ideally be handled by getServerSideProps's notFound
    // but good for defensive rendering in case of client-side issues.
    return (
      <Layout>
        <p>Project not found.</p>
      </Layout>
    );
  }

  // Convert arrays to comma-separated strings for display if they are arrays
  const roles = Array.isArray(project.role)
    ? project.role.join(", ")
    : project.role;
  const technologies = Array.isArray(project.technology)
    ? project.technology.join(", ")
    : project.technology;

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article", // Primary type: This page is a detailed case study (an article)
    // Consider TechArticle if your case studies are very technical deep-dives
    // "@type": "TechArticle",

    headline: `${project.projectName} Case Study by Abu Taher Muhammad`, // Main headline of the article
    name: project.projectName, // Descriptive name
    description: project.excerpt, // The summary or abstract of the case study
    url: `${info.website}/projects/${project.slug}`, // Canonical URL of the case study page

    image: {
      // Featured image for the article
      "@type": "ImageObject",
      url: imageBuilder(project.thumbnail).width(1200).height(630).url(),
      caption: `Featured image for the ${project.title || project.projectName} case study`,
      width: 1200,
      height: 630,
    },

    // Author of the case study article
    author: {
      "@type": "Person",
      name: info.author,
      url: info.website, // Link to your 'about' page or personal website
    },

    // Publisher of the case study (your website/portfolio)
    publisher: {
      "@type": "Person", // Or 'Person' if you primarily operate as an individual brand
      name: info.websiteName || info.author, // Your website's name or your name
      url: info.website,
      logo: {
        // Logo associated with the publisher
        "@type": "ImageObject",
        url: `${info.website}/favicon.jpg`,
        width: 384, // Recommended max width
        height: 384, // Recommended max height
      },
    },

    datePublished: project.datePublished, // Format: YYYY-MM-DD (e.g., "2023-10-27")
    dateModified: project.dateModified || project.datePublished, // Last modified date (if different)

    // Keywords or tags for the article
    keywords: project.tags ? project.tags.join(", ") : null, // Assuming project.tags is an array of strings

    // Article section or category
    articleSection: "Web Development Case Study",

    // Relate the article to the actual software/code it's about using 'about'
    about: {
      "@type": "SoftwareSourceCode", // The specific software/code being discussed
      name: project.title || project.projectName,
      description: project.excerpt, // Description of the software itself
      url: project.projectLiveUrl || null, // Live demo URL of the project
      codeRepository: project.githubUrl || null, // Link to the code repository
      programmingLanguage: project.technology // Can be a string or array of strings
        ? Array.isArray(project.technology)
          ? project.technology.join(", ")
          : project.technology
        : null,
      license: project?.license || null, // e.g., "MIT", "GPLv3"
      // Add more specific SoftwareSourceCode properties if available:
      // operatingSystem: "Any",
      // softwareRequirements: "Node.js, npm",
      // releaseNotes: "...",
      // targetProduct: { /* e.g., Product type if this software is a product */ }
    },

    // Indicate that this article is part of your overall projects collection
    isPartOf: {
      "@type": "CollectionPage", // Type consistent with your projects index page
      name: "Projects by Abu Taher Muhammad",
      url: `${info.website}/projects`,
    },

    // If you have a table of contents or specific sections within the article
    // hasPart: [
    //   {
    //     "@type": "WebPageElement",
    //     name: "Introduction",
    //     url: `${info.website}/projects/${project.slug}#introduction`
    //   },
    //   // ... more sections
    // ],

    // If the case study references any specific organization or person
    // mentions: [
    //   {
    //     "@type": "Organization",
    //     name: "Client Company Name",
    //     url: "https://client-company.com"
    //   }
    // ]
  };

  return (
    <Layout
      meta={{
        children: (
          <script
            id="structured-data-projects-index-page"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(projectJsonLd),
            }}
          />
        ),
      }}
    >
      {/* Pass the dynamic meta object here */}
      <ProjectHeader
        title={project.title || project.projectName} // Use title or project name
        cover={imageBuilder(project.thumbnail).width(1920).height(1080).url()}
      />
      <ProjectInfo
        role={roles}
        tech={technologies}
        intro={project.excerpt}
        website={project.liveUrl}
      />
      <ProjectContent content={project.body || {}} />
    </Layout>
  );
}

export async function getServerSideProps({ params, res }) {
  // Set Cache-Control headers for better performance and CDN caching
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=31536000, stale-while-revalidate=59",
  );

  const { id: slug } = params; // Destructure slug directly from params

  try {
    const project = await getClient(false).fetch(PROJECT_QUERY, { slug });

    if (!project) {
      return {
        notFound: true, // Return 404 if project not found
      };
    }

    return {
      props: {
        project, // Pass the entire project object
        slug,
      },
    };
  } catch (error) {
    console.error("Error fetching project data:", error);
    return {
      notFound: true, // Return 404 on fetch error
    };
  }
}

export default Project;
